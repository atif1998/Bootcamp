import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (eneteredExpenseData) => {
        const expenseData = {
            ...eneteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);

    }
    function showFormHandler() {
        setShowForm(!showForm);
    }
    if (showForm) {
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClick={showFormHandler} />
            </div>
        );
    }
    return (
        <div className="new-expense">
            <button type="click" onClick={showFormHandler} >Add New Expense</button>
        </div>
    )
}

export default NewExpense
