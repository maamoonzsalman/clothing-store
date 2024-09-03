import React from "react";
import '../styles/CartItem.css'
import { useState } from "react";

const CartItem = ({item, removeFromCart, addToQuantity, removeFromQuantity}) => {
    
    return (
      <div className="cart-item">
        <button className="remove-button" onClick={() => removeFromCart(item)}>✖</button> {/* Added remove button */}
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <div className="cart-item-price">${item.price}</div>
      </div>
      <div className="cart-item-actions">
        <div className="cart-item-quantity">
          <button className="quantity-button" onClick={() => removeFromQuantity(item)} >-</button>
          {item.quantity}
          <button className="quantity-button" onClick={() => addToQuantity(item)}>+</button>
        </div>
      </div>
    </div>
    )
}

export default CartItem;