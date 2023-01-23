import classes from "./IncompleteProfile.module.css";
import React, {  useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Form from "../Layout/UI/Form";

const IncompleteProfile = () => {
  const [displayNameValue, setDisplayNameValue] = useState("");
  const [photoUrlValue, setPhotoUrlValue] = useState("");
  const fullNameRef = useRef("");
  const photoRef = useRef("");

  const idToken = useSelector((state) => state.auth.idToken);

  const updateDetailsHandler = async (event) => {
    event.preventDefault();

    const fullName = fullNameRef.current.value;
    const photoUrl = photoRef.current.value;
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDioUWgUyr4tXaxDCmNzUrCRcWT9PE6y5o",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: fullName,
          photoUrl: photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);

      fullNameRef.current.value = "";
      photoRef.current.value = "";
    } else {
      alert(data.error.message);
    }
  };

  useEffect(() => {
    const fillInputsHandler = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDioUWgUyr4tXaxDCmNzUrCRcWT9PE6y5o",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: idToken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setDisplayNameValue(data.users[0].displayName);
        setPhotoUrlValue(data.users[0].photoUrl);
      } else {
        alert(data.error.message);
      }
    };
    fillInputsHandler();
  }, []);

  return (
    <React.Fragment>
    <Form onSubmit={updateDetailsHandler}>
      <h3>Contact Details</h3>
      <div>
        <label>Update Your Profile Name</label>
        <input
          placeholder="Full Name"
          input="text"
          ref={fullNameRef}
          defaultValue={displayNameValue}
        />
        <label>Update Your Photo</label>
        <input
          placeholder="Profile Photo URL"
          input="text"
          ref={photoRef}
          defaultValue={photoUrlValue}
        />
      </div>
      <button>Update Details</button>
    </Form>
  </React.Fragment>
);
};

export default IncompleteProfile;
