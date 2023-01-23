import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store/AuthReducer";
import { themeActions } from "../store/ThemeReducer";

const Header = () => {
  const [premiumButton, setPremiumButton] = useState(true);
  const [premiumAccount, setPremiumAccount] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const expensesAmount = useSelector((state) => state.expense.expensesAmount);
  const expenses = useSelector((state) => state.expense.expenses);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
  };

  const activatePremiumAccount = () => {
    setPremiumButton(false);
    setPremiumAccount(true);
  };

  const darkModeActivation = () => {
    dispatch(themeActions.switchTheme());
  };

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });

    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const downloadExpenses = () => {
    let headers = ["Money,Description,Category"];

    let usersCsv = expenses.reduce((acc, user) => {
      const { money, description, category } = user;
      acc.push([money, description, category].join(","));
      return acc;
    }, []);

    downloadFile({
      data: [...headers, ...usersCsv].join("\n"),
      fileName: "expenses.csv",
      fileType: "text/csv",
    });
  };
  return (
    <header className={classes.Header}>
      <div>
        <h3>Expense Tracker</h3>
      </div>
      {!isLoggedIn && <Link to="/signUp">Sign Up</Link>}
      {!isLoggedIn && <Link to="/signIn">Sign In</Link>}
      {!!isLoggedIn && <Link to="/expenses">Expenses</Link>}
      {!!isLoggedIn && (
        <Link onClick={logoutHandler} to="/signIn">
          Logout
        </Link>
      )}
       {!!isLoggedIn && expensesAmount > 1000 && premiumButton && (
        <button onClick={activatePremiumAccount}>Premium Account</button>
      )}
      {!!isLoggedIn && premiumAccount && expensesAmount > 1000 && (
        <button onClick={darkModeActivation}>Dark Mode</button>
      )}
      {!!isLoggedIn && premiumAccount && expensesAmount > 1000 && (
        <button onClick={downloadExpenses}>Download Expenses</button>
      )}
    </header>
  );
};
export default Header;
