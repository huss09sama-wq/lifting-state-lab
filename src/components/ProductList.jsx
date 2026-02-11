import "./cart.css";
import React from 'react';

function ProductList({ onAddToCart }) {
  const products = ["Burger", "Pizza", "Fries"];

  return (
    <div className="product-list">
      <h2 className="section-title">Popular Items</h2>

      <ul>
        {products.map(product => (
          <li key={product} className="product-item">
            <span style={{color: 'grey'}}>{product}</span>
            <button
              className="add-btn"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;