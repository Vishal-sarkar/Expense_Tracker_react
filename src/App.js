import React from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {

  const expences = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 94.12,
      date: new Date(2021, 2, 12),
    },,
    {
      id: "e3",
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expenses) => {
    console.log("In App.js", expenses);
  }


  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expences={expences}/>
    </div>
  );
}

export default App;
