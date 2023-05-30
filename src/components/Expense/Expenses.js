import React, { useState } from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from './ExpenseList';

function Expenses({ items }) {
  const [year, setYear] = useState("2020");

  const selectDateHandeler = (e) => {
    setYear(e)
  }

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });

  

  return (
    <li>
      <Card className='expenses' >
        <ExpensesFilter selected={year} selectDateHandeler={selectDateHandeler} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </li>
  )
}

export default Expenses