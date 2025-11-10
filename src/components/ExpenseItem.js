import React from 'react';

function ExpenseItem({ expense }) {
  return (
    <li className="expense-item">
      <span className="expense-name">{expense.name}</span>
      {/* UPDATED: Changed $ to ₹ */}
      <span className="expense-amount">₹{expense.amount.toFixed(2)}</span>
    </li>
  );
}

export default ExpenseItem;