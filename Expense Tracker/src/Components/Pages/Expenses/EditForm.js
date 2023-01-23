import { useRef } from "react";
import Form from "../../Layout/UI/Form";
import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { editExpenseFetching } from "../../Store/ActionCreators/ExpenseActionCreators";
import classes from "./AddExpenseForm.module.css";
import Button from "../../Layout/UI/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const EditForm = (props) => {
  const id = document.getElementById("EditModalOverlay");
  const dispatch = useDispatch();

  const moneyRef = useRef("");
  const descRef = useRef("");
  const categoryRef = useRef("");

  const expense = props.editExpense;

  const editExpenseHandler = async (event) => {
    event.preventDefault();

    const expenseItem = {
      id: expense.id,
      money: moneyRef.current.value,
      description: descRef.current.value,
      category: categoryRef.current.value,
    };
    dispatch(editExpenseFetching(expenseItem, props.email));
    setTimeout(() => {
      props.onClose();
    }, 1000);
  };

  const Overlay = () => {
    return (
      <div className={classes.modal}>
        <Form onSubmit={editExpenseHandler}>
          <h2>Edit Expense</h2>
          <div>
            <label htmlFor="moneyId">Money Spent</label>
            <input
              id="moneyId"
              type="number"
              ref={moneyRef}
              defaultValue={expense.money}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="descId">Description</label>
            <input
              id="descId"
              type="text"
              ref={descRef}
              defaultValue={expense.description}
              required
            ></input>
          </div>
          <div htmlFor="categoryId">
            <label htmlFor="categoryId">Category</label>
            <select
              id="categoryId"
              ref={categoryRef}
              defaultValue={expense.category}
            >
              <option value="Food">Food</option>
              <option value="Grocery">Grocery</option>
              <option value="Fuel">Fuel</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <Button>Edit Expense</Button>
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

export default EditForm;
