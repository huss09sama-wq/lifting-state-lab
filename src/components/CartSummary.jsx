import React from 'react';
import "./cart.css";
function CartSummary({ cartCount }) {
  return (
    <div className="cart-summary">
      <h3>Items in Cart: {cartCount}</h3>
    </div>
  );
}

export default CartSummary;