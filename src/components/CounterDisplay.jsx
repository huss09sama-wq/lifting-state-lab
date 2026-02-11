import React from 'react';
import "./cart.css";
function CounterDisplay({ count }) {
  return (
    <div className="counter-display">
      <p className="counter-label">Current Count</p>
      <h2 className="counter-value">{count}</h2>
    </div>
  );
}

export default CounterDisplay;