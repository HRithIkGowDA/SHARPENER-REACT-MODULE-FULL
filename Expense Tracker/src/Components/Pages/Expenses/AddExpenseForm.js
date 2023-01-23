import { useRef } from "react";
import Form from "../../Layout/UI/Form";
import classes from "./AddExpenseForm.module.css";
import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { addExpenseFetching } from "../../Store/ActionCreators/ExpenseActionCreators";
import Button from "../../Layout/UI/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const AddExpenseForm = (props) => {
  const id = document.getElementById("EditModalOverlay");

  const dispatch = useDispatch();

  const moneyRef = useRef("");
  const descRef = useRef("");
  const categoryRef = useRef("");

  const addExpenseHandler = (event) => {
    event.preventDefault();
    const expense = {
      money: moneyRef.current.value,
      description: descRef.current.value,
      category: categoryRef.current.value,
    };
    dispatch(addExpenseFetching(expense, props.email));

    moneyRef.current.value = "";
    descRef.current.value = "";
    categoryRef.current.value = "Food";

    setTimeout(() => {
      props.onClose();
    }, 1000);
  };

  const Overlay = () => {
    return (
      <div className={classes.modal}>
        <Form onSubmit={addExpenseHandler}>
          <h2>Add Expense</h2>
          <div>
            <label htmlFor="moneyId">Money Spent</label>
            <input id="moneyId" type="number" ref={moneyRef} required></input>
          </div>
          <div>
            <label htmlFor="descId">Description</label>
            <input id="descId" type="text" ref={descRef} required></input>
          </div>
          <div htmlFor="categoryId">
            <label htmlFor="categoryId">Category</label>
            <select id="categoryId" ref={categoryRef}>
              <option value="Food">Food</option>
              <option value="Grocery">Games</option>
              <option value="Fuel">Fuel</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <Button>Add Expense</Button>
        </Form>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, id)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, id)}
    </React.Fragment>
  );
};

export default AddExpenseForm;
