import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from './Card'

function ExpenseItem({ title, amount, date }) {
const clickHandle = () => {
  console.log("clicked");
}


  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={clickHandle()}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem