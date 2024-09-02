import React from 'react';
import "../styles/CartPage.css"
import CartSummary from '../components/CartSummary';

const CartPage = () => {
    return (
        <div className="cart-container">
            <div className="cart-left">   
                <h1 className='cart-title'>YOUR CART</h1>
                <div className="cart-items">
                    <div>
                        item 1
                    </div>
                </div>
            </div>
            <div className="cart-right">
                <div className="cart-summary">
                    <CartSummary />
                </div>
            </div>
        </div>
    )
}

export default CartPage;