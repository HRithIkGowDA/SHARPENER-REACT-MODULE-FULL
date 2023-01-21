import React,{useState} from "react"
import ExpensesItem from "./ExpensesItem"
import './Expenses.css'
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from "./ExpensesList"
import ExpenseChart from './ExpensesChart'
const Expenses =(props)=>{

   const[filteredYear , setFilteredYear] = useState('2020')


    const filterChangeHandler=(selectedYear) =>{
        setFilteredYear(selectedYear)   
    }

    const filteredExpenses = props.data.filter(expenses=>expenses.date.getFullYear().toString() === filteredYear )


 
    return <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
     {/* <ExpensesItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date} location={props.data[0].location}/> 
     <ExpensesItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date} location={props.data[1].location} />
     <ExpensesItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date} location={props.data[2].location} /> 
     
     
     <ExpensesItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date} location={props.data[3].location} /> */}
     <ExpenseChart expenses={filteredExpenses} />
     <ExpensesList items={filteredExpenses} />
    </Card>   
}
  


export default Expenses;