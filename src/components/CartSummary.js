import React from "react";
import '../styles/CartSummary.css'

function CartSummary() {
    return (
      <div className="order-summary">
        <h2 className="order-summary-title">Order Summary</h2>
        <div className="order-summary-item">
          <span>Subtotal</span>
          <span>$0</span>
        </div>
        <div className="order-summary-item">
          <span>Delivery fee</span>
          <span>$0</span>
        </div>
        <div className="order-summary-total">
          <span>Total</span>
          <span>$0</span>
        </div>
        <button className="order-summary-button">Buy</button>
      </div>
    );
  }

export default CartSummary;
  