import React from "react";
import '../styles/CartItem.css'

const CartItem = ({item}) => {
    return (
      <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <div className="cart-item-price">${item.price}</div>
      </div>
      <div className="cart-item-actions">
        <div className="cart-item-quantity">
          <button className="quantity-button">-</button>
          <span>1</span>
          <button className="quantity-button">+</button>
        </div>
      </div>
    </div>
    )
}

export default CartItem;