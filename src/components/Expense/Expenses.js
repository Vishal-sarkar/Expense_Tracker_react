import React, { useState } from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ items }) {
  const [year, setYear] = useState("2020");

  const selectDateHandeler = (e) => {
    setYear(e)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <>
      <Card className='expenses' >
        <ExpensesFilter selected={year} selectDateHandeler={selectDateHandeler} />


        {items.map((item, i) => {
          return (
            item.date.getFullYear(0) == year ? (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date} />
            ) : (
              ""
            )
          )
        })}
      </Card>
    </>
  )
}

export default Expenses