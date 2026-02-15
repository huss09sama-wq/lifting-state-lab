import React from 'react';

function CartSummary({ cartCount, onCheckout }) {
  return (
    <div className="cart-summary">
      <h3>Items in Cart: {cartCount}</h3>
      {cartCount > 0 && (
        <button 
          className="checkout-btn" 
          onClick={onCheckout}
        >
          Checkout Now
        </button>
      )}
    </div>
  );
}

export default CartSummary;