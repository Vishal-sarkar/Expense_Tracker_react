import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpenseComp from "./components/NewExpenseComp";

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
  ]


  return (
    <div>
      <h2>Let's get started!</h2>
      {expences.map((item, i) => {
        return (
          <ExpenseItem
          key={item.id} 
          title={item.title}
          amount={item.amount}
          date={item.date} />
        )
      })}
      {expences.map((item, i) => {
        return (
          <NewExpenseComp
          key={item.id} 
          title={item.title}
          amount={item.amount}
          date={item.date} />
        )
      })}
    </div>
  );
}

export default App;
