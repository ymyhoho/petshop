import React from 'react';
import CartItem from './CartItem';

function ShoppingCart(){
    return(
        <div>
            <h2>Shopping Cart</h2>
            <div className="cart-item"></div>
            <CartItem name="dog food" price="40" />
        </div>
    );
}

export default ShoppingCart;