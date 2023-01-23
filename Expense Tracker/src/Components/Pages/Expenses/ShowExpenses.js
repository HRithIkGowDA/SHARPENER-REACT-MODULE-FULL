import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import Calendar from "react-calendar";
import classes from "./ShowExpenses.module.css";
import "react-calendar/dist/Calendar.css";

const ShowExpenses = (props) => {
  const [date, setDate] = useState(new Date());
  return (
    <div className={classes.Expenses}>
      <Calendar onChange={setDate} value={date}></Calendar>
      <ExpenseItem
        editExpense={props.editExpenseHandler}
        deleteExpenseHandler={props.deleteExpenseHandler}
      />
    </div>
  );
};

export default ShowExpenses;