import { ExpenseActions } from "../ExpenseReducer";

export const getExpenseFetching = (email) => {
  return async (dispatch) => {
    const getExpenseFetching = async (email) => {
      try {
        const response = await fetch(
          `https://expense-tracker-8a6c9-default-rtdb.firebaseio.com/expenses/${email}.json`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("getExpenseFetching", data);
        let itemsArray = [];
        let expensesAmount;
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
        expensesAmount = itemsArray.reduce((curNumber, expense) => {
          return curNumber + Number(expense.money);
        }, 0);
        dispatch(
          ExpenseActions.addExpense({
            itemsArray: itemsArray,
            expensesAmount: expensesAmount,
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    getExpenseFetching(email);
  };
};

export const addExpenseFetching = (expense, email) => {
  return async (dispatch) => {
    const addExpenseFetching = async (expense, email) => {
      try {
        const response = await fetch(
          `https://expense-tracker-8a6c9-default-rtdb.firebaseio.com/expenses/${email}.json`,
          {
            method: "POST",
            body: JSON.stringify({
              money: expense.money,
              description: expense.description,
              category: expense.category,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("addExpenseFetching", data);
        dispatch(getExpenseFetching(email));
      } catch (error) {
        alert(error.message);
      }
    };
    addExpenseFetching(expense, email);
  };
};

export const editExpenseFetching = (expenseItem, email) => {
  return async (dispatch) => {
    const editExpenseFetching = async (expenseItem, email) => {
      try {
        const response = await fetch(
          `https://expense-tracker-8a6c9-default-rtdb.firebaseio.com/expenses/${email}/${expenseItem.id}.json`,
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
        console.log("editExpenseFetching", data);
        dispatch(getExpenseFetching(email));
      } catch (error) {
        alert(error.message);
      }
    };
    editExpenseFetching(expenseItem, email);
  };
};

export const deleteExpenseFetching = (id, email) => {
  return async (dispatch) => {
    const deleteExpenseFetching = async (id, email) => {
      try {
        const response = await fetch(
          `https://expense-tracker-8a6c9-default-rtdb.firebaseio.com/expenses/${email}/${id}.json`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("DeleteExpenseFetching", data);
        dispatch(getExpenseFetching(email));
      } catch (error) {
        alert(error.message);
      }
    };
    deleteExpenseFetching(id, email);
  };
};