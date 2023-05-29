import React, { useState } from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expences }) {
  const [year, setYear] = useState("2020");

  const selectDateHandeler = (e) => {
    setYear(e)
  }
  console.log("sbdgfvb", year);
  return (
    <>
      <Card className='expenses' >
        <ExpensesFilter selected={year} selectDateHandeler={selectDateHandeler} />
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
    </>
  )
}

export default Expenses