import React from 'react';
import "./cart.css";
function CounterControls({ onIncrement, onDecrement }) {
  return (
    <div className="counter-controls">
      <button className="btn secondary" onClick={onDecrement}>-</button>
      <button className="btn primary" onClick={onIncrement}>+</button>
    </div>
  );
}

export default CounterControls;
