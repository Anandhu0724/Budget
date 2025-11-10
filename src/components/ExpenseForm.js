import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || +amount <= 0) {
      alert('Please enter a valid name and amount.');
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      name: name,
      amount: +amount,
    };

    onAddExpense(newExpense);

    setName('');
    setAmount('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Expense Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Coffee"
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          // UPDATED: Changed placeholder
          placeholder="e.g., 50.00"
          min="0.01"
          step="0.01"
        />
      </div>
      <button type="submit" className="btn-submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;