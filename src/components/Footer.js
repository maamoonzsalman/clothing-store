import '../styles/Footer.css';
import React from 'react';

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
            <li className='link'><a href="#">Home</a></li>
            <li className='link'><a href="#">Shop</a></li>
            <li className='link'><a href="#">Cart</a></li>
            <li className='link'><a href="#">Repository</a></li>
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
