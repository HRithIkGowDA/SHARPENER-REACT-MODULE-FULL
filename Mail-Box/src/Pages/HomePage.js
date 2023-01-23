import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"

import { Button, Container } from "react-bootstrap"
import Compose from "../Components/Compose"
import { useSelector } from "react-redux"
import Inbox from "./Inbox"

import { mailArrActions } from "../store/mailSlice"
import useHttp from "../Components/hooks/use-Http"
import { showInboxActions } from "../store/mailSlice"


const HomePage=()=>{
    
    const [sendRequest]=useHttp()

    const inboxShow=useSelector(state=>state.mailArr.inbox)

    const dispatch=useDispatch()
    // Unread Mail Count
    const unreadMailCount=useSelector(state=>state.mailArr.unreadMails)
    const [showCompose,setShowCompose]=useState(false)
    
    const showComposeHandler=()=>{
      
        setShowCompose(!showCompose)
    }

    const showInboxHandler=()=>{
        dispatch(showInboxActions.setInboxShow(true))
        if(showCompose){
            setShowCompose(false)
        }
    }
    
  const showSentBoxHandler=()=>{
    dispatch(showInboxActions.setInboxShow(false))
if(showCompose){
    setShowCompose(false)
}

  }
 
 
 
  let showText='Inbox'
  if(!inboxShow){
    showText='Sent Mails'
  }
 

  const userAuthDetail=JSON.parse(localStorage.getItem('currUser'))
  let userEmail=userAuthDetail.email.replace(/\W/g, '')

 let a=  setInterval(async() => {
    let inbox=await sendRequest(userEmail,{type:'get'})
    let unreadCount =0
    const emailsArr = []
    for (let key in inbox.data){
        emailsArr.push({
            id:key,
            emailSubject:inbox.data[key].emailSubject,
            emailBody:inbox.data[key].emailBody,
            sentAt:inbox.data[key].sentAt,
            from:inbox.data[key].from,
            newMail:inbox.data[key].newMail
        })
        if (inbox.data[key].newMail===true){
          unreadCount+=1
        }
    }
   if(unreadCount>unreadMailCount){
    
    dispatch(mailArrActions.setUnreadMails(unreadCount))
   }
   else{
    
   }
    

    }, 2000);
    

  useEffect(()=>{
    

    // cleanup function
     return ()=>{
      clearInterval(a)
     }
      
  },[unreadMailCount,showCompose,inboxShow])
  

    return (
        <Container>
            <div className="d-flex justify-content-around ">
        <Button onClick={showComposeHandler} variant='warning'>{showCompose?'Close Compose':'Compose Mail'}</Button>
        <Button onClick={showInboxHandler} variant='danger'>Inbox {inboxShow && <span className="ms-1 bg-primary p-2 rounded-pill">{unreadMailCount}</span>}</Button>
        <Button variant='success' onClick={showSentBoxHandler}>Sent Items</Button></div>
        {!showCompose && <h3 className='border-bottom border-dark p-3'>{showText}</h3>}
        { showCompose && <Compose showCompose={showComposeHandler}></Compose>}
        {!showCompose && <Inbox  inboxShow={inboxShow} ></Inbox>}
        
        </Container>
    )

}

export default HomePage