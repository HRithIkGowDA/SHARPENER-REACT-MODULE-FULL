import React from "react";
import { Link } from "react-router-dom";


import classes from "./Welcome.module.css"
import { useSelector } from "react-redux";

const Welcome = () => {
  const idToken = useSelector((state) => state.auth.idToken);
    const verifyEmailHandler = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDioUWgUyr4tXaxDCmNzUrCRcWT9PE6y5o",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: idToken,
            requestType: "VERIFY_EMAIL",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data.email);
      } else {
        alert(data.error.message);
      }
    };
  return (
    <div>
      <h2 className={classes.title}>WELCOME TO MY PROJECT " EXPENSE TRACKER"</h2>
      <p className={classes.status}>
        INCOMPLETE PROFILE.
        <Link to="/incompleteProfile"> COMPLETE PROFILE</Link>
      </p>
      <button onClick={verifyEmailHandler}>VERIFY YOUR EMAIL</button>
    </div>
  );
};

export default Welcome;