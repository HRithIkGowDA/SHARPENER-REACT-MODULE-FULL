import react, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = filterValue => {
    setFilteredYear(filterValue);
  };
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChanged={filterChangeHandler} />
      {props.expenses
        .filter(x => x.date.getFullYear() === parseInt(filteredYear))
        .map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })};
    </Card>
  );
}

export default Expenses;
