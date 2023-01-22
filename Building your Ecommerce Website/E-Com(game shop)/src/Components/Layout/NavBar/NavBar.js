import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

const NavBar = (props) => {
 
 
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <NavLink className={classes.icon} to="/Home">
          HOME
        </NavLink>
        <NavLink className={classes.icon} to="/Store">
          STORE
        </NavLink>
        <NavLink className={classes.icon} to="/AboutUs">
          ABOUT
        </NavLink>
        <NavLink className={classes.icon} to="/Login">
          LOGIN
        </NavLink>
        <NavLink className={classes.icon} to="/ContactUs">
          CONTACT US
        </NavLink>
       
      </nav>
    </Fragment>
  );
};
export default NavBar;
