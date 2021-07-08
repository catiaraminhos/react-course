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

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === expensesYearFilter;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={expensesYearFilter}
                    onChangeFilter={filterExpensesHandler}
                />

                {filteredExpenses.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    );
                })}
            </Card>
        </div>
    );
};

export default Expenses;
