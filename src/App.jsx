import "./App.css";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1>Latabat</h1>
      
      <section className="section">
        <h1 className="title">Exercise 1: Lifted Counter State</h1>
        <CounterDisplay count={count} />
        <CounterControls onIncrement={increment} onDecrement={decrement} />
      </section>

      <section className="section">
        <h1 className="title">Exercise 2: Shopping Cart</h1>
        <CartSummary cartCount={cart.length} />
        <ProductList onAddToCart={addToCart} />
      </section>
    </div>
  );
}

export default App;