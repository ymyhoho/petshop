import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CartProvider } from "./CartItem";

function App() {
  return (
      <Router>
        <CartProvider>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">HAPPY PET HOUSE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/cart">Shopping Cart</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
        </CartProvider>
      </Router>
  );
}

export default App;
