import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import { Route, Routes } from "react-router-dom"
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage addToCart={addToCart}/>}/>
          <Route path="/cart" element={<CartPage cartItems={cartItems}/>}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
