
import { useEffect} from "react"
import { useSelector } from "react-redux"
import {Card, Form } from "react-bootstrap"
import { mailArrActions } from "../store/mailSlice"
import { Link } from "react-router-dom"
import classes from './Inbox.module.css'
import { useDispatch } from "react-redux"
import { memo} from "react"
import useHttp from "../Components/hooks/use-Http"

const Inbox = (props) => {
    

    const inboxArr=useSelector(state=>state.mailArr.allMails)
    const unreadMailCount=useSelector(state=>state.mailArr.unreadMails)
    const userAuthDetail=JSON.parse(localStorage.getItem('currUser'))
    let userEmail=userAuthDetail.email.replace(/\W/g, '')
    
    
    const dispatch=useDispatch()
    const inboxShow=props.inboxShow
    if (!inboxShow){
        userEmail=`sent-by-${userEmail}`
    }

    const [sendRequest]=useHttp()
    
    const fetchInboxHandler=async(userMailBoxID)=>{
      

        let inbox=await sendRequest(userMailBoxID,{type:'get'})
            
            let unreadCount =0
            const emailsArr = []
            for (let key in inbox.data){
                emailsArr.push({
                    id:key,
                    emailSubject:inbox.data[key].emailSubject,
                    emailBody:inbox.data[key].emailBody,
                    sentAt:inbox.data[key].sentAt,
                    from:inboxShow? inbox.data[key].from:inbox.data[key].recipient,
                    newMail:inbox.data[key].newMail
                })
                if (inbox.data[key].newMail===true){
                  unreadCount+=1
                }
            }
            
        
            dispatch(mailArrActions.setMailArr(emailsArr))
            dispatch(mailArrActions.setUnreadMails(unreadCount))
          
    }
    
    let revMailArr = []
    for (let i = inboxArr.length - 1; i >= 0; i--) {

        revMailArr.push(inboxArr[i])
    }
    
    let inboxMessages = revMailArr.map((email) => {
        
        const readMailHandler = () => {
            
            sendRequest(userEmail,{type:'patch',data:{ newMail: false }},email)
        }

        const deleteMailHandler = async () => {
            
   
            let delRes =await sendRequest(userEmail,{type:'delete'},email)
            
           if (delRes.statusText==='OK'){
            fetchInboxHandler(userEmail)
            console.log('delete success')
           }
           else{
            alert('Could not delete. plz try again..')
        }
        }
        
        return <div key={email.id} className={classes.mainCard}>
            
        <div className={classes.card} >
        <Link  className={classes.cardElements} to={`${email.id}`}> 
           
            <Card.Body className={`d-flex justify-content-between`} onClick={readMailHandler}>
            {inboxShow &&  <Form.Check
                    checked={email.newMail}
                    readOnly
                    type='checkbox'
                    id={`${email.id}_read`}
                />}
                <Card.Subtitle>{email.emailSubject}</Card.Subtitle>
                <p >{inboxShow?'from:- ':'To:- '} {email.from}</p>
                <Card.Text>{`${email.sentAt}`}</Card.Text>
            </Card.Body>
            </Link>
            </div>
            
            <button type='button' className='btn btn-outline-danger ms-2' onClick={deleteMailHandler}>X</button>
            </div>
              
    })
    
    useEffect(()=>{
      
      fetchInboxHandler(userEmail)
        
        
    },[inboxShow,unreadMailCount])

    return (
        <div className="mt-4">
            {inboxMessages}
        </div>
    )
}

export default memo(Inbox)