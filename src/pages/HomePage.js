import React from 'react';
import '../styles/HomePage.css'; 
import { Link } from "react-router-dom"
import image from '../Assets/main-img.png'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>    
            <section className="hero-section">
            <div className="hero-content">
                <h1>Find Products<br/> That Matches<br/> Your Style</h1>
                <p>
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className="shop-button"><Link to="/shop" className="shop-button">Shop now </Link></button>
                <div className="stats">
                <div className="stat-item">
                    <h3>200+</h3>
                    <p>International brands</p>
                </div>
                <div className="stat-item">
                    <h3>2000+</h3>
                    <p>High-quality products</p>
                </div>
                <div className="stat-item">
                    <h3>30000+</h3>
                    <p>Happy customers</p>
                </div>
                </div>
            </div>
            <div className="hero-image">
                <img src={image} alt="Stylish outfits" />
            </div>
            </section>
    </>
  );
};

export default HomePage;
