import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/cart" element={<CartPage />}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
