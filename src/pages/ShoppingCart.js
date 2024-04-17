import React from "react";
import { useCart } from "./CartItem";

function ShoppingCart() {
  const {cartItems, removeFromCart} = useCart();

  console.log("cartItems:", cartItems);

  return (
    <div>
      <h2 className="my-4">Shopping Cart</h2>
      <ul>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{" "}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        ) : (
          <li>The shopping cart is empty</li>
        )}
      </ul>
    </div>
  );
}

export default ShoppingCart;
