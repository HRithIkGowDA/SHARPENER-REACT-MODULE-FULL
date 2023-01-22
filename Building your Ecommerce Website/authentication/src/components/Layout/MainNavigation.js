import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import tokenIdContext from '../../store/tokenId-context';

const MainNavigation = () => {

  const tokenIdCtx = useContext(tokenIdContext);
  const history = useHistory();

  const logoutHandler = () => {
    tokenIdCtx.removeTokenId();
    history.replace('/auth')
  }


  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {!tokenIdCtx.isLoggedIn && <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {tokenIdCtx.isLoggedIn && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {tokenIdCtx.isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
