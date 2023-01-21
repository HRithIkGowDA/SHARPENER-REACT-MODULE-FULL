import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense =(props)=>{
  const[isEditing , setIsEditing]=useState(false)
  const saveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    console.log(expenseData)
    props.onAddNewExpense(expenseData)
  }
  const startEditing=()=>{
    setIsEditing(true);
  }
  const stopEditing=()=>{
    setIsEditing(false);
  }

  return <div className='new-expense'>
    {!isEditing &&<button onClick={startEditing}>Add New Expenses</button>}
    {isEditing && <ExpenseForm onCancel={stopEditing} onsaveExpenseData={saveExpenseDataHandler} />}
  </div>
}

export default NewExpense;