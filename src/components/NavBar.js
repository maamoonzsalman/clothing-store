import '../styles/NavBar.css';
import React from 'react';
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <div className='nav-bar'>
            <div className='nav-item'>
                    Maamoon's Shop
            </div> 
            <div className="nav-item">
                    <Link to="/" className='nav-item'>Home</Link>
            </div>
            <div className="nav-item">
                    <Link to="/shop" className='nav-item'>Shop</Link>
            </div>
            <div className='nav-item'>
                    <Link to="/cart" className='nav-item'>Cart</Link>
            </div>
       </div>
    );
};

export default NavBar;