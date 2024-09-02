import React, { useState } from "react";
import '../styles/ProductCard.css'

const ProductCard = ({ product, addToCart}) => {

  /* Add item to cart function */
  /* Remove item from cart function */


    return (
        <div className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-info">
                          <h3 className="product-title">{product.title}</h3>
                          <div className="product-rating">
                            <span className="star">⭐</span>
                            <span>{product.rating.rate}</span>
                            <span className="rating-count">({product.rating.count})</span>
                          </div>
                          <div className="product-price">${product.price}</div>
                          <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
        </div>
    )
}

export default ProductCard;