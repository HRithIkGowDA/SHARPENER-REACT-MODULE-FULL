import React ,{ useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm =(props)=>{
    const[enteredTitle , setEnteredTitle] = useState('')
    const[enteredAmount , setEnteredAmount] = useState('')
    const[enteredDate , setEnteredDate] = useState('');
    // const[userInput , setUserInput] =useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const submitHandler=(event)=>{
        event.preventDefault();
        const newExpense ={
            title : enteredTitle,
            amount : enteredAmount,
           date :new Date(enteredDate),
        }
        props.onsaveExpenseData(newExpense);
        //console.log(newExpense);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        props.onCancel()
    }

    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        // setUserInput((prev)=>{
        //   return {...prev , enteredTitle:event.target.title}
        // })
    }
    const amountChangehandler = (event)=>{
        setEnteredAmount(event.target.value);
    //    setUserInput({
    //      ...userInput,
    //      enteredAmount : event.target.value
    //    })
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value
    //    })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
               <div className='new-expense__control'>
                   <label>Title</label>
                   <input type="text" value={enteredTitle} onChange={titleChangeHandler}  />
               </div>
               <div className='new-expense__control'>
                   <label>Amount</label>
                   <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangehandler}  />
               </div>
               <div className='new-expense__control'>
                   <label>Date</label>
                   <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}  />
               </div>
            </div>
            <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expenses</button>
            </div>
        </form>
    )
}

export default ExpenseForm