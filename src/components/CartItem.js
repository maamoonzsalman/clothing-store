import React from "react";
import '../styles/CartItem.css'

const CartItem = ({product}) => {
    return (
        <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <div className="product-title">{product.title}</div>
        <div className="product-price">${product.price}</div>
      </div>
      <div className="product-actions">
        <button className="remove-button">✖</button>
        <div className="product-quantity">
          <button className="quantity-button">-</button>
          <span>1</span>
          <button className="quantity-button">+</button>
        </div>
      </div>
    </div>
    )
}