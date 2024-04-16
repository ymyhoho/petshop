import React from "react";
import { Card, Button } from "react-bootstrap";

function Product({ product, addToCart }) {
  const { name, price } = product;

  const handleAddToCart = () => {
    console.log(`${name} Added to the cart`);

    addToCart(product);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price$:{price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
