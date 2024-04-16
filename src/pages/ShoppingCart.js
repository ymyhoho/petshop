import React from "react";
import { Table } from "react-bootstrap";
import { useCart } from "./CartItem";

function ShoppingCart() {
  const [cartItems, removeFromCart] = useCart();

  console.log("cartItems:", cartItems);

  return (
    <div>
      <h2 className="my-4">购物车</h2>
      <ul>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}元{" "}
              <button onClick={() => removeFromCart(item.id)}>移除</button>
            </li>
          ))
        ) : (
          <li>购物车为空</li>
        )}
      </ul>
    </div>
  );
}

export default ShoppingCart;
