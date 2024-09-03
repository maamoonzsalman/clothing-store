import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import { Route, Routes } from "react-router-dom"
import { useState } from 'react';
import { remove } from 'lodash';

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  
  const addToCart = (product) => {
    const updatedItems = items.map(item =>
      item.id === product.id ? { ...item, inCart: true, quantity: 1 } : item
    );
  
    // Find the updated product with the correct quantity and inCart status
    const updatedProduct = updatedItems.find(item => item.id === product.id);
  
    // Update both state variables with the correct data
    setItems(updatedItems);
    setCartItems([...cartItems, updatedProduct]);
  };

  const removeFromCart = (product) => {
    const updatedItems = items.map(item =>
      item.id === product.id ? { ...item, inCart: false, quantity: 0 } : item
    );
  
    // Find the updated product with the correct quantity and inCart status
    const updatedProduct = updatedItems.find(item => item.id === product.id);
  
    // Update both state variables with the correct data
    setItems(updatedItems);
    setCartItems(cartItems.filter(item => item.id !== product.id));

  }

  const addToQuantity = (product) => {
    const updatedItems = items.map(item =>
      item.id === product.id && item.quantity < 10 ? { ...item, quantity: item.quantity + 1 } : item
    );
    
    // Update both state variables with the correct data
    setItems(updatedItems);
    
    const updatedCartItems = cartItems.map(item =>
      item.id === product.id && item.quantity < 10
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  
    setCartItems(updatedCartItems);
  }

  const removeFromQuantity = (product) => {
    const updatedItems = items.map(item =>
      item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    
    // Update both state variables with the correct data
    setItems(updatedItems);
    
    const updatedCartItems = cartItems.map(item =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  
    setCartItems(updatedCartItems);
  }

  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage items={items} setItems={setItems} addToCart={addToCart} />}/>
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} addToQuantity={addToQuantity} removeFromQuantity={removeFromQuantity}/>}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
