import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = { expenses: [], expensesAmount: 0 };

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = action.payload.itemsArray;
      state.expensesAmount = action.payload.expensesAmount;
    },
    deleteExpense: (state) => {},
    editExpense: (state) => {},
  },
});

export const ExpenseActions = expenseSlice.actions;

export default expenseSlice.reducer;