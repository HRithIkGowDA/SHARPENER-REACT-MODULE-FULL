import React from "react";
import { Link } from "react-router-dom";
// import LoginContext from "../../Context/LoginContext";
import { useSelector } from "react-redux";

const Welcome = () => {
  // const loginCtx = useContext(LoginContext);
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
      <h2>WELCOME TO MY PROJECT " THE EXPENSE TRACKER "</h2>
      <p>
        Your Profile is incomplete.
        <Link to="/incompleteProfile"> Complete Profile</Link>
      </p>
      <button onClick={verifyEmailHandler}>Verify Email</button>
    </div>
  );
};

export default Welcome;
