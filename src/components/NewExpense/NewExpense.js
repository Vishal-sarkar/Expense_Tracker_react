import React, { useState } from 'react'
import ExpenseForn from './ExpenseForn'
import "./NewExpense.css"

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState();

  const saveExpenseDataHandeler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  const startEditingHandle = () => {
    setIsEditing(true);
  }

  const stopEditingHandle = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandle}>Add New Expenses</button>}
      {isEditing && <ExpenseForn onSaveExpenseData={saveExpenseDataHandeler} stopEditingHandle={stopEditingHandle}/>}
    </div>
  )
}

export default NewExpense