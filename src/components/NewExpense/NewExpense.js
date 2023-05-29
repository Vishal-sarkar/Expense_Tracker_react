import React from 'react'
import ExpenseForn from './ExpenseForn'
import "./NewExpense.css"

const NewExpense = (props) => {

  const saveExpenseDataHandeler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
        <ExpenseForn onSaveExpenseData={saveExpenseDataHandeler}/>
    </div>
  )
}

export default NewExpense