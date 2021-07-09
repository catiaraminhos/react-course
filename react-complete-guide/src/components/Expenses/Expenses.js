import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {
    const [expensesYearFilter, setExpensesYearFilter] = useState('2020');

    const filterExpensesHandler = (year) => {
        setExpensesYearFilter(year);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === expensesYearFilter;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={expensesYearFilter}
                    onChangeFilter={filterExpensesHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
