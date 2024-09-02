import '../styles/Footer.css';
import React from 'react';
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Maamoon's Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            quisquam molestiae? Dignissimos, excepturi ipsum ipsam architecto
            alias vero voluptatem asperiores necessitatibus autem at voluptates
            veniam facilis obcaecati libero nobis eum. Eum, nesciunt nam fugit
            odio veritatis qui natus illum? Labore quisquam nobis eius
            quibusdam cupiditate sequi cumque veniam, recusandae, laudantium,
            tenetur ut magnam excepturi. Sequi vel repellat pariatur dolores
            atque.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Useful links</h2>
          <ul className='link-list'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/shop">Shop</Link>
            <Link className='link' to="/cart">Cart</Link>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Maamoon's Shop © 2000-2024. All Rights Reserved</p>
        <p>
          Project made by <a href="#">Maamoon Salman</a>, inspired by <a href="#">Viad Petruk</a>'s work, utilizes the Fake Store API
        </p>
      </div>
    </footer>
  );
};

export default Footer;
