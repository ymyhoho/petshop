import React from 'react';

function CartItem(props){
    return(
        <div className="cart-item">
            <h3>{props.name}</h3>
            <p>Price:${props.price}</p>
            <button>Remove from cart</button>
        </div>
    );
}

export default CartItem;