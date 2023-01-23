import { useRef } from "react"
import { Button, Card, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setAuthActions } from "../store/authSlice"

const LoginPage=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const emailRef=useRef()
    const passwordRef=useRef()
    
    const loginSubmitHandler=async(event)=>{
        event.preventDefault()
        const enteredEmail=emailRef.current.value
        const enteredPassword=passwordRef.current.value
        
            try{

            let loginResponse=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoVZdvnGqGs4L8yOg0aoRCwXdU1JBFG-I',
            
            {

                method:'POST',
                body:JSON.stringify({

                    email:enteredEmail,
                    password:enteredPassword,
                    returnSecureToken:true

                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }
            
            )

            if (!loginResponse.ok){

                let a=await loginResponse.json()
                throw new Error (a.error.message)
            }

            let loginJsonRes=await loginResponse.json()
            console.log(loginJsonRes.email, 'is Logged In successfully')
            localStorage.setItem('currUser',JSON.stringify({token:loginJsonRes.idToken,email:loginJsonRes.email}))
            dispatch(setAuthActions.isAuthenticated())
            navigate('/homepage')
                }catch(error){
                
                alert(error)
                }
    }

    return (

        <div  style={{backgroundImage:'url(/images/signupback.jpg)'}}>

        <Card className="ms-4" style={{width:'400px'}}>

        <Form onSubmit={loginSubmitHandler} className="m-4 p-4 border border-primary">
            <h1 className="text-dark mb-4 border-bottom border-dark pb-2">LOGIN</h1>
            <Form.Group className='m-2'>
                <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required></Form.Control>
            </Form.Group>

            <Form.Group className='m-2'>
                <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} required></Form.Control>
            </Form.Group>

           
            <Button type='submit'>LOGIN</Button>

        </Form>
        <p className="ms-4">NO ACCOUNT? <Link to='/signup'>SIGN UP </Link></p>
        </Card>
        </div>
    )

}

export default LoginPage