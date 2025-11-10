import React from 'react';

// This is a simple SVG icon for the welcome page.
// You could replace this with any SVG or image.
const BudgetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="welcome-icon"
  >
    <path d="M20 12V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M16 12h.01" />
    <path d="M12 12h.01" />
    <path d="M8 12h.01" />
    <path d="M12 18h.01" />
  </svg>
);

function WelcomePage({ onEnter }) {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <BudgetIcon />
        <h1 className="welcome-title">Welcome to Budget Tracker</h1>
        <p className="welcome-subtitle">
          Take control of your finances, one expense at a time.
        </p>
        <button className="welcome-button" onClick={onEnter}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;