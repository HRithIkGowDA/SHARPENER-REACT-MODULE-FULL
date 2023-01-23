import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useState,useRef } from "react";
import { Button, Card,Form } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from './Compose.module.css'

import useHttp from "./hooks/use-Http";

const Compose=(props)=>{

    const [sendRequest]=useHttp()
    const [to,setTo]=useState(null) //To field
    const subjectRef=useRef()
    const toChangeHandler=(e)=>{
        setTo(e.target.value)
    }

    const editorState=EditorState.createEmpty()
    const [description,setDescription]=useState(editorState)
    const EditorStateChangeHandler=(editorState)=>{
        setDescription(editorState)

    }

    const emailBody=draftToHtml(convertToRaw((description.getCurrentContent())))
    const userAuthDetail=JSON.parse(localStorage.getItem('currUser'))
    
    

const sendMailHandler=async(event)=>{
    event.preventDefault()

    // scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    const enteredSubject=subjectRef.current.value  // subject field

    const sentMailData={
        
        emailSubject:enteredSubject,
        emailBody:emailBody,
        sentAt:new Date().toLocaleString(),
        from:userAuthDetail.email,
        newMail:true
    }
    const dataForSentBox={
        recipient:to,
        emailSubject:enteredSubject,
        emailBody:emailBody,
        sentAt:new Date().toLocaleString(),
        
        newMail:true
    }


   let res=await sendRequest(`${to.replace(/\W/g, '')}`,{type:'post',data:sentMailData})
    
   if (res.statusText!=='OK'){
    alert('Mail could not sent. try again')
    
   }

   //api post for sentbox

   let resForSentbox=await sendRequest(`sent-by-${userAuthDetail.email.replace(/\W/g, '')}`,{type:'post',data:dataForSentBox})
   if (resForSentbox.statusText==='OK'){
    console.log(' sent for sentBox.')
    
   }

   props.showCompose()
     
}

    return (
        <>
        
        <Form onSubmit={sendMailHandler} className={classes.forms}>
        <div className='d-flex justify-content-end'> <button onClick={()=>{props.showCompose()}} type="button" className="btn-close " aria-label="Close"></button></div>
        <Form.Group className='mt-4 mb-2'>
            <Form.Label>To,</Form.Label>
            <Form.Control type='email' placeholder='Recipients Email' onChange={toChangeHandler} required/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Subject :-</Form.Label>
            <Form.Control type='text' placeholder='Subject Line' ref={subjectRef} required/>
        </Form.Group>

        <Card className='mt-4' style={{height:'auto'}}>
            <Card.Body>
            <Editor 
            placeholder="Start Composing from Here"
            toolbarClassName="editToolbar"
            wrapperClassName="editWrapper"
            editorClassName="editEditor"
            onEditorStateChange={EditorStateChangeHandler}
            />

            </Card.Body>

        </Card>
        <Button type='submit' className='mt-2'>Send Mail</Button>
        </Form>
        </>

    )
}

export default Compose