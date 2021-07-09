import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const addNewExpenseHandler = () => {
        setIsFormVisible(true);
    };

    const cancelSubmissionHandler = () => {
        setIsFormVisible(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsFormVisible(false);
    };

    let newExpenseContent = (
        <button type="button" onClick={addNewExpenseHandler}>
            Add New Expense
        </button>
    );

    if (isFormVisible) {
        newExpenseContent = (
            <ExpenseForm
                onCancelSubmission={cancelSubmissionHandler}
                onSaveExpenseData={saveExpenseDataHandler}
            />
        );
    }

    return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
