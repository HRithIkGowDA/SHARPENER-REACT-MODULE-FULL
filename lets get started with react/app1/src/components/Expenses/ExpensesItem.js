import React , {useState} from 'react'
import './ExpensesItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card'

const ExpensesItem=(props)=>{

   
    return(
     <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseDetail title={props.title} amount={props.amount} location={props.location} />
        {/* <button onClick ={deleteExpenseHandler}>Delete</button> */}

    </Card>
    );
}

export default ExpensesItem;