import React from 'react';
import "../styles/CartPage.css"
import CartSummary from '../components/CartSummary';
import CartItem from '../components/CartItem';

const CartPage = ({cartItems, removeFromCart, addToQuantity, removeFromQuantity}) => {
    return (
        <div className="cart-container">
            <div className="cart-left">   
                <h1 className='cart-title'>YOUR CART</h1>
                <div className="cart-items">
                    <div>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} addToQuantity={addToQuantity} removeFromQuantity={removeFromQuantity} />
                        ))
                    )}
                    </div>
                </div>
            </div>
            <div className="cart-right">
                <div className="cart-summary">
                    <CartSummary cartItems={cartItems} />
                </div>
            </div>
        </div>
    )
}

export default CartPage;