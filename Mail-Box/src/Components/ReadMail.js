import { Card, Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const ReadMail=()=>{
    const {mailid}=useParams()
    const mailArr=useSelector(state=>state.mailArr.allMails)
    const inboxShow=useSelector(state=>state.mailArr.inbox)
    const fullMail=mailArr.find((mail)=>mail.id===mailid)

    return (
        <Container className='m-4'>
        <Card >
            <Card.Header className="d-flex justify-content-between"><div>{inboxShow?'From:-':'To:- '} {fullMail.from}</div><div>{inboxShow? 'Received On:-':'Sent On:-'} {fullMail.sentAt}</div> </Card.Header>
            <Card.Body>
            <Card.Subtitle>{fullMail.emailSubject}</Card.Subtitle>
                <div dangerouslySetInnerHTML={{__html:fullMail.emailBody}}></div>
               
            </Card.Body>
        </Card>
        </Container>
    )
}

export default ReadMail