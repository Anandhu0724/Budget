import React, { useState } from 'react';

// We now receive `setBudget` as a prop from App.js
function BudgetSummary({ budget, spent, remaining, setBudget }) {
  
  // --- NEW state for handling the edit mode ---
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const getRemainingClass = () => {
    if (remaining < 0) return 'negative';
    if (remaining < budget * 0.2) return 'warning';
    return 'positive';
  };

  // --- NEW function to handle saving the budget ---
  const handleSaveBudget = () => {
    if (newBudget > 0) {
      setBudget(Number(newBudget)); // Update the budget in App.js
      setIsEditing(false); // Exit edit mode
    } else {
      alert('Please enter a valid budget amount.');
    }
  };

  return (
    <div className="budget-summary">
      
      {/* --- UPDATED Budget Card --- */}
      <div className="summary-card">
        <h3>Budget</h3>
        {isEditing ? (
          // Show input field when in edit mode
          <div className="edit-budget-form">
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              className="budget-input"
            />
            <button onClick={handleSaveBudget} className="btn-save">Save</button>
          </div>
        ) : (
          // Show budget and edit button when not in edit mode
          <div className="budget-display">
            {/* UPDATED: Changed $ to ₹ */}
            <span>₹{budget.toFixed(2)}</span>
            <button onClick={() => setIsEditing(true)} className="btn-edit">
              Edit
            </button>
          </div>
        )}
      </div>

      {/* --- UPDATED Spent Card (Currency only) --- */}
      <div className="summary-card">
        <h3>Spent</h3>
        {/* UPDATED: Changed $ to ₹ */}
        <span>₹{spent.toFixed(2)}</span>
      </div>
      
      {/* --- UPDATED Remaining Card (Currency only) --- */}
      <div className={`summary-card ${getRemainingClass()}`}>
        <h3>Remaining</h3>
        {/* UPDATED: Changed $ to ₹ */}
        <span>₹{remaining.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default BudgetSummary;