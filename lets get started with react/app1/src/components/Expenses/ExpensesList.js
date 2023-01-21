import './ExpensesList.css'
import ExpensesItem from './ExpensesItem'

const ExpensesList =(props)=>{
    let expensesContent = <p>No Expenses Found</p>

    if(props.items.length==1){
        return <div>
            <ExpensesItem key={props.items[0].id} title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <p className='expenses-list__fallback'>Only Single Expense Found</p>
        </div>
    }
    
 if(props.items.length ==0 ){
    return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
 }
   return <ul className='expenses-list'>
       {props.items.map(data1=><ExpensesItem key={data1.id} title={data1.title} amount={data1.amount} date={data1.date} />)}
   </ul>

   
}

export default ExpensesList