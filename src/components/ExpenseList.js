import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses added yet.</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}

export default ExpenseList;