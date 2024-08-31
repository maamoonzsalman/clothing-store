import React, { useEffect, useState } from 'react';
import '../styles/ShopPage.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetch data from the Fake Store API
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setItems(data); // Store the products in the state
            setLoading(false);
          } catch (error) {
            console.error('Error fetching the products:', error);
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, []); 

    
      if (loading) {
        return <p>Loading products...</p>;
    }
  

    return (
        <>
            <NavBar />
            <div className='shop-container'>
                <div className='sidebar'>
                    <h3 className='cat'>Categories</h3>
                    <ul className="categories-list">
                        <li><button>All</button></li>
                        <li>Electronics</li>
                        <li>Jewelry</li>
                        <li>Men's Clothing</li>
                        <li>Women's Clothing</li>
                    </ul>
                </div>
                
                <div className="products">
                    {items.map(product => (
                        <ProductCard id={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShopPage;