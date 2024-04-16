import React from "react";
import Product from "./Product";
import { useCart } from "./CartItem";

function ProductList() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Dog food", price: 40 },
    { id: 2, name: "Cat litter", price: 20 },
    { id: 3, name: "Bird toy", price: 10 },
  ];

  return (
    <div>
      <h2 className="my-4">Pick for your pet</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
