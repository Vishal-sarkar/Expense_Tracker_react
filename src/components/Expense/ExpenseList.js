import React from 'react'
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css"

const ExpenseList = ({items}) => {

    if (items.length === 0) {
        return <p className='expenses-list__fallback'>No expense found.</p>;
    }

    return (
        <ul className='expenses-list'>
            {items.map((item) => {
            return (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date} />
            )
        })}
        </ul>
    )
    


}

export default ExpenseList