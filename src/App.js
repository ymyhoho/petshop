import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <Router>
      <div>
        <switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
