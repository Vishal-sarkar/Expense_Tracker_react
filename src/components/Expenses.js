import React from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import NewExpenseComp from "./NewExpenseComp";
import Card from './Card';

function Expenses({expences}) {
  return (
    <Card className='expenses' >
        {expences.map((item, i) => {
        return (
          <ExpenseItem
          key={item.id} 
          title={item.title}
          amount={item.amount}
          date={item.date} />
        )
      })}
    </Card>
  )
}

export default Expenses