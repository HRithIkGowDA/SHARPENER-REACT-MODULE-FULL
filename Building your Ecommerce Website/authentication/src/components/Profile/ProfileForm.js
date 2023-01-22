import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './ProfileForm.module.css';
import tokenIdContext from '../../store/tokenId-context';

const ProfileForm = () => {
  const history = useHistory();
  const tokenIdCtx = useContext(tokenIdContext);
  const newPassword = useRef();

  const changePasswordHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDhFQuVWRXo5lQJdxa7uxe-2wWnByO9oYU', {
        method: 'POST',
        body: JSON.stringify({
          idToken: tokenIdCtx.tokenId,
          password: newPassword.current.value,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      

      if(res.ok) {
        history.replace('/');
        const data = await res.json();
        // console.log('password changed',data);
        tokenIdCtx.addTokenId(data.idToken);
      }
      else {
        const data = await res.json();
        throw new Error(data.error.message)
      }
    }
    catch (err) {
      // console.log(err);
      alert(err.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
