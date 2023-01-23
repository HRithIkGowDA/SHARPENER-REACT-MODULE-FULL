import { useSelector } from "react-redux";
import Button from "../../Layout/UI/Button";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const expenses = useSelector((state) => state.expense.expenses);

  return (
    <div className={classes.ExpenseItem}>
      <ul>
        {expenses.map((expenseItem) => (
          <li key={expenseItem.id}>
            <header>
              <h2>{expenseItem.description}</h2>
              <h2>Rs{expenseItem.money}</h2>
            </header>
            <div>
              <h4>Category: {expenseItem.category}</h4>
              <div className={classes.ButtonItems}>
                <Button
                  onClick={props.editExpense.bind(
                    null,
                    expenseItem.id,
                    expenseItem.money,
                    expenseItem.description,
                    expenseItem.category
                  )}
                >
                  Edit
                </Button>
                <Button
                  onClick={props.deleteExpenseHandler.bind(
                    null,
                    expenseItem.id
                  )}
                >
                  Delete
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpenseItem;
