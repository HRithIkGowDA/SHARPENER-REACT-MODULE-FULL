import { useRef } from "react"
import { Button, Card, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import classes from './SignUpPage.module.css'
import { setAuthActions } from "../store/authSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

const SignUpPage=()=>{

    const emailRef=useRef()
    const passwordRef=useRef()
    const confPasswordRef=useRef()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const signUpSubmitHandler=async(event)=>{
        event.preventDefault()
        const enteredEmail=emailRef.current.value
        const enteredPassword=passwordRef.current.value
        const enteredConfPassword=confPasswordRef.current.value

        if(enteredPassword!==enteredConfPassword){

            alert('Passwords Do not Match')
            return
        }
        else{

            try{

            let signUpResponse=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoVZdvnGqGs4L8yOg0aoRCwXdU1JBFG-I',
            
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

            if (!signUpResponse.ok){

                throw new Error(' Could not Sign Up Please try again')
            }

            let signUpJsonRes=await signUpResponse.json()
            console.log(signUpJsonRes.email, 'is now registered')
            localStorage.setItem('currUser',JSON.stringify({token:signUpJsonRes.idToken,email:signUpJsonRes.email}))
            dispatch(setAuthActions.isAuthenticated())
            navigate('/homepage')
                }catch(error){
                alert(error.message)
                
                }
            }

    }

    return (

        <div className="h-100" style={{backgroundImage:'url(/images/signupback.jpg)'}}>

        <Card className={classes.centered}>

        <Form onSubmit={signUpSubmitHandler} className="m-4 p-2">
            <h1 className="text-dark mb-4 border-bottom border-dark pb-2">SIGN UP</h1>
            <Form.Group className='m-2'>
                <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required></Form.Control>
            </Form.Group>

            <Form.Group className='m-2'>
                <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} required></Form.Control>
            </Form.Group>

            <Form.Group className="m-2">
                <Form.Control type="password" placeholder="Confirm Password" ref={confPasswordRef} required></Form.Control>
            </Form.Group>
            <Button type='submit'>SIGN UP</Button>

        </Form>
        <p className="ms-4">NO ACCOUNT? <Link to='/login'>LOGIN</Link></p>
        </Card>
        </div>
    )

}

export default SignUpPage