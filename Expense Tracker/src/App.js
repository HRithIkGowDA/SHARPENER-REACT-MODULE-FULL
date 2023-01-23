import React from "react";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Header from "./Components/Layout/Header/Header";
import { Redirect, Route } from "react-router-dom";
import SignIn from "./Components/Pages/SignIn/SignIn";
import Welcome from "./Components/Pages/Welcome/Welcome";
import IncompleteProfile from "./Components/Pages/IncompleteProfile/IncompleteProfile";
import ForgotPassword from "./Components/Pages/ForgotPassword/ForgotPassword";
import Expenses from "./Components/Pages/Expenses/Expenses";
import classes from "./App.module.css";
import { useSelector } from "react-redux";
import HomePage from "./Components/Pages/HomePage/HomePage";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);
  let themeValue;
  if (theme) {
    themeValue = classes.AppDark;
  } else {
    themeValue = classes.AppLight;
  }


  return (
    <div className={themeValue}>
      <Header></Header>
      {isLoggedIn && (
        <Route path="*">
          <Redirect to="/expenses" />
        </Route>
      )}
      {!isLoggedIn && (
        <Route path="*">
          <Redirect to="/" />
        </Route>
      )}
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/signIn">
        <SignIn />
      </Route>
      <Route path="/incompleteProfile">
        <IncompleteProfile />
      </Route>
      <Route path="/forgotPassword">
        <ForgotPassword />
      </Route>
      <Route path="/expenses">
        {isLoggedIn ? <Expenses /> : <Redirect to="/signIn" />}
      </Route>
      <Route path="/welcome">
        {isLoggedIn ? <Welcome /> : <Redirect to="/signIn" />}
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
