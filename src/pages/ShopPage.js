import React, { useEffect, useState } from 'react';
import '../styles/ShopPage.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from '../components/ProductCard';

const ShopPage = ({ items, setItems, addToCart }) => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('All')
    const [filteredItems, setFilteredItems] = useState([]);

    // function to change category on click
    
    useEffect(() => {
        // Fetch data from the Fake Store API
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            const updatedData = data.map((item) => {
                const existingItem = items.find(p => p.id === item.id);
                return {
                  ...item,
                  inCart: existingItem ? existingItem.inCart : false,  // Preserve the `inCart` state if it already exists
                  quantity: existingItem ? existingItem.quantity : 0,
                };
              });

            setItems(updatedData); // Store the products in the state
            setLoading(false);
          } catch (error) {
            console.error('Error fetching the products:', error);
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, []); 

    useEffect(() => {
        if (category === 'All') {
            setFilteredItems(items)
        } else {
            const filtered = items.filter(item => item.category === category.toLowerCase())
            setFilteredItems(filtered);
        }
    }, [category, items])

    
      if (loading) {
        return <p>Loading products...</p>;
    }

    const handleCategoryChange = (category) => {
        setCategory(category)
    }
  

    return (
        <>
            <div className='shop-container'>
                <div className='sidebar'>
                    <h3 className='cat'>Categories</h3>
                    <ul className="categories-list">
                        <li><button className='category-btn' onClick={() => handleCategoryChange('All')}>All</button></li>
                        <li><button className='category-btn' onClick={() => handleCategoryChange('electronics')}>Electronics</button></li>
                        <li><button className='category-btn' onClick={() => handleCategoryChange('jewelery')}>Jewelry</button></li>
                        <li><button className='category-btn' onClick={() => handleCategoryChange("men's clothing")}>Men's Clothing</button></li>
                        <li><button className='category-btn' onClick={() => handleCategoryChange("women's clothing")}>Women's Clothing</button></li>
                    </ul>
                </div>
                
                <div className="products">
                    {filteredItems.map(product => (
                        <ProductCard id={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShopPage;