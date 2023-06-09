import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForn = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [showForm, setShowForm] = useState();

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandeler = (e) => {
        setEnteredTitle(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value};
        // })
    }

    const amountChangeHandeler = (e) => {
        setEnteredAmount(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value};
        // });
    }

    const dateChangeHandeler = (e) => {
        setEnteredDate(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value};
        // });
    }

    // console.log(userInput.enteredTitle);
    // console.log(userInput.enteredAmount);
    // console.log(userInput.enteredDate);

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    // if (showForm) {
    //     return (
    //         <form onSubmit={submitHandler}>
    //             <div className='new-expense__controls'>
    //                 <div className='new-expense__control'>
    //                     <label>Title</label>
    //                     <input type='text' value={enteredTitle} onChange={titleChangeHandeler} />
    //                 </div>
    //                 <div className='new-expense__control'>
    //                     <label>Amount</label>
    //                     <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandeler} />
    //                 </div>
    //                 <div className='new-expense__control'>
    //                     <label>Date</label>
    //                     <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandeler} />
    //                 </div>
    //             </div>
    //             <div className='new-expense__actions'>
    //                 <button onClick={() => setShowForm(false)}>Cancel</button>
    //                 <button type='submit'>Add Expense</button>
    //             </div>
    //         </form>
    //     )
    // }

    // return (
    //     <div className='new-expense__newbtn'>
    //         <button onClick={() => setShowForm(true)}>Add New Expense</button>
    //     </div>
    // )

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandeler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandeler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandeler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.stopEditingHandle}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )



}

export default ExpenseForn