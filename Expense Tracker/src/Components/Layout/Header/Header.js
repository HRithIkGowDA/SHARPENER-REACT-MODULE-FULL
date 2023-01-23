import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../Store/AuthReducer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { themeActions } from "../../Store/ThemeReducer";
import classes from "./Header.module.css";
import Button from "../UI/Button";

const Header = () => {
  const [premiumButton, setPremiumButton] = useState(true);
  const [premiumItem, setPremiumItem] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const expensesAmount = useSelector((state) => state.expense.expensesAmount);
  const expenses = useSelector((state) => state.expense.expenses);
  const theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
  };

  const activatePremiumItem = () => {
    setPremiumButton(false);
    setPremiumItem(true);
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

    let expensesCsv = expenses.reduce((items, expenses) => {
      const { money, description, category } = expenses;
      items.push([money, description, category].join(","));
      return items;
    }, []);

    downloadFile({
      data: [...headers, ...expensesCsv].join("\n"),
      fileName: "expenses.csv",
      fileType: "text/csv",
    });
  };
  return (
    <header className={classes.header}>
      <h1>EXPENSE TRACKER</h1>
      <div>
        {!isLoggedIn && <Link to="/signUp">SIGN UP</Link>}
        {!isLoggedIn && <Link to="/signIn">SIGN IN</Link>}
        {!!isLoggedIn && <Link to="/expenses">YOUR EXPENSES</Link>}
        {!!isLoggedIn && (
          <Link to="/incompleteProfile">COMPLETE YOUR PROFILE NOW.</Link>
        )}
        {!!isLoggedIn && (
          <Link onClick={logoutHandler} to="/signIn">
            Logout
          </Link>
        )}
        {!!isLoggedIn && expensesAmount > 1000 && premiumButton && ( //condition for premium
          <Button onClick={activatePremiumItem}>
           PREMIUM ACCCOUNT ACTIVATED
          </Button>
        )}
        {!!isLoggedIn && premiumItem && expensesAmount > 1000 && (
          <Button onClick={darkModeActivation}>
            {!theme ? "Dark Mode" : "Light Mode"}
          </Button>
        )}
        {!!isLoggedIn && premiumItem && expensesAmount > 1000 && (
          <Button onClick={downloadExpenses}>DOWNLOAD YOUR EXPENSES</Button>
        )}
      </div>
    </header>
  );
};
export default Header;
