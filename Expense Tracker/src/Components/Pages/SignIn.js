import React from "react";
import { useRef } from "react";
import { useHistory,Link  } from "react-router-dom";

import classes from "./SignIn.module.css";
import Form from "../Layout/UI/Form";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/AuthReducer";

const SignIn = () => {
  const emailRef = useRef("");
  const pswdRef = useRef("");

  const history = useHistory("");
  const dispatch = useDispatch();
  

  const signInSubmitHandler = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const pswdValue = pswdRef.current.value;

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDioUWgUyr4tXaxDCmNzUrCRcWT9PE6y5o",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: pswdValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data.email);

      emailRef.current.value = "";
      pswdRef.current.value = "";

      dispatch(AuthActions.login({ email: data.email, idToken: data.idToken }));

      history.replace("/expenses");
    } else {
      alert(data.error.message);
    }
  };
  return (
    <Form onSubmit={signInSubmitHandler} className={classes.signIn}>
      <div>
        <h3>SIGN IN</h3>
      </div>
      <div>
        <input
          id="emailId"
          placeholder="Email"
          type="text"
          ref={emailRef}
        ></input>
        <input
          id="passwordId"
          placeholder="Password"
          type="password"
          ref={pswdRef}
        />
      </div>
      <button>SIGN IN</button>
      <Link to="/forgotPassword">FORGOT PASSWORD?</Link>
    </Form>
);
};
export default SignIn;