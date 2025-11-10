import React, { useState, useEffect } from 'react';
import BudgetSummary from './components/BudgetSummary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import WelcomePage from './components/WelcomePage'; // <-- IMPORT NEW COMPONENT

function App() {
  // --- NEW STATE for Welcome Page ---
  const [isAppEntered, setIsAppEntered] = useState(false);

  // --- UPDATED STATE for Expenses ---
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // --- UPDATED STATE for Budget ---
  // The budget is no longer a constant.
  // We load it from localStorage, or default to 20000.
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem('budget');
    return savedBudget ? JSON.parse(savedBudget) : 20000;
  });

  // --- UPDATED useEffect for saving ---
  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Save budget to localStorage
  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);
  
  // --- Calculations (no change) ---
  const totalSpent = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const remaining = budget - totalSpent;

  // Function to add a new expense (no change)
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // --- NEW Function to handle entering the app ---
  const handleEnterApp = () => {
    setIsAppEntered(true);
  };

  // --- NEW: Conditional Rendering ---
  // If the app hasn't been "entered", show the WelcomePage.
  if (!isAppEntered) {
    return <WelcomePage onEnter={handleEnterApp} />;
  }

  // --- Original App JSX (now shown after entering) ---
  return (
    <div className="app-container">
      <header>
        <h1>My Budget Tracker (₹)</h1>
      </header>
      
      {/* We now pass 'setBudget' so the component can update the budget */}
      <BudgetSummary
        budget={budget}
        spent={totalSpent}
        remaining={remaining}
        setBudget={setBudget} 
      />
      
      <div className="content-grid">
        <div className="form-section">
          <h2>Add New Expense</h2>
          <ExpenseForm onAddExpense={addExpense} />
        </div>
        
        <div className="list-section">
          <h2>Your Expenses</h2>
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;