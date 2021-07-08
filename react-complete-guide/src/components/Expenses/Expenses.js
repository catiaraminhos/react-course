import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
    const [expensesYearFilter, setExpensesYearFilter] = useState('2020');

    const filterExpensesHandler = (year) => {
        setExpensesYearFilter(year);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === expensesYearFilter;
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            );
        });
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={expensesYearFilter}
                    onChangeFilter={filterExpensesHandler}
                />

                {expensesContent}
            </Card>
        </div>
    );
};

export default Expenses;
