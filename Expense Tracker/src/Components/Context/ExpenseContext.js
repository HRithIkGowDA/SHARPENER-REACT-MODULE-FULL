import React, { useState } from "react";
const ExpenseContext = React.createContext({
  expenses: null,
  addExpense: () => {},
  getExpense: () => {},
  deleteExpense: () => {},
  editExpense: () => {},
});

export const ExpenseContextProvider = (props) => {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = () => {};
  const getExpenseHandler = () => {
    const getExpenseItem = async () => {
      try {
        const response = await fetch(
          "https://expense-tracker-8a6c9-default-rtdb.firebaseio.com/expenses.json",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        let itemsArray = [];
        if (!!data) {
          itemsArray = Object.keys(data).map((expense) => {
            return {
              id: expense,
              money: data[expense].money,
              description: data[expense].description,
              category: data[expense].category,
            };
          });
        }
        setExpenses(itemsArray);
      } catch (error) {
        console.log(error.message);
      }
    };

    getExpenseItem();
  };

  const deleteExpenseHandler = (id) => {
    const deleteExpenseItem = async (id) => {
      try {
        const response = await fetch(
          `https://expense-tracker-8a6c9-default-rtdb.firebaseio.com/expenses/${id}.json`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        getExpenseHandler();
      } catch (error) {
        alert(error.message);
      }
    };
    deleteExpenseItem(id);
  };

  const editExpenseHandler = (expenseItem) => {
    const editExpenseItem = async (expenseItem) => {
      try {
        const response = await fetch(
          `https://expense-tracker-8a6c9-default-rtdb.firebaseio.com/expenses/${expenseItem.id}.json`,
          {
            method: "PUT",
            body: JSON.stringify({
              money: expenseItem.money,
              description: expenseItem.description,
              category: expenseItem.category,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        getExpenseHandler();
      } catch (error) {
        alert(error.message);
      }
    };
    editExpenseItem(expenseItem);
  };

  const expenseContext = {
    expenses: expenses,
    addExpense: addExpenseHandler,
    getExpense: getExpenseHandler,
    deleteExpense: deleteExpenseHandler,
    editExpense: editExpenseHandler,
  };
  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContext;
