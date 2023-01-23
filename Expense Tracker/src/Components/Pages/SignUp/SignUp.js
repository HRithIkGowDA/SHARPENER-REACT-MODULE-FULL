import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignUp.module.css";
import Form from "../../Layout/UI/Form";
import Button from "../../Layout/UI/Button";

const SignUp = () => {
  const emailRef = useRef("");
  const pswdRef = useRef("");
  const confirmPswdRef = useRef("");

  const [emailValid, setEmailValid] = useState(false);
  const [pswdValid, setPswdValid] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);

  const history = useHistory();

  const signUpSubmitHandler = async (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const pswdValue = pswdRef.current.value;
    const confirmPswdValue = confirmPswdRef.current.value;
    if (
      emailValue.includes("@") &&
      emailValue.includes(".") &&
      pswdValue.length > 5 &&
      confirmPswdValue === pswdValue
    ) {
      setEmailValid(false);
      setPswdValid(false);
      setConfirmValid(false);

      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDioUWgUyr4tXaxDCmNzUrCRcWT9PE6y5o",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: confirmPswdValue,
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
        confirmPswdRef.current.value = "";
        history.replace("/signIn");
      } else {
        alert(data.error.message);
      }
    } else {
      if (!emailValue.includes("@") || !emailValue.includes(".")) {
        setEmailValid(true);
      }
      if (pswdValue.length < 5) {
        setPswdValid(true);
      }
      if (confirmPswdValue !== pswdValue) {
        setConfirmValid(true);
      }
    }
  };
  return (
    <Form onSubmit={signUpSubmitHandler} className={classes.signUp}>
      <div>
        <h3>Sign Up</h3>
      </div>
      <div>
        <input
          id="emailId"
          placeholder="Email"
          type="text"
          ref={emailRef}
        ></input>
        {emailValid && <p>Please Enter Valid Email</p>}
        <input
          id="passwordId"
          placeholder="Password"
          type="password"
          ref={pswdRef}
        />
        {pswdValid && <p>Please Enter Valid Password</p>}
        <input
          id="confirmPwdId"
          placeholder="Confirm Password"
          type="password"
          ref={confirmPswdRef}
        />
        {confirmValid && <p>Please Match the Password</p>}
      </div>
      <Button>Sign Up</Button>
    </Form>
  );
};
export default SignUp;
