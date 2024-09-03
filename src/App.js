import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import { Route, Routes } from "react-router-dom"
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  
  const addToCart = (product) => {
    setItems(items.map(item =>
      item.id === product.id ? { ...item, inCart: true } : item
    ));
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setItems(items.map(item =>
      item.id === product.id ? { ...item, inCart: false } : item
    ));
    setCartItems(cartItems.filter(item => item.id !== product.id));

  }

  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage items={items} setItems={setItems} addToCart={addToCart} />}/>
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
