import React from 'react';
import Product from './product';

function ProductList(){
    return(
        <div>
            <h2>Pick for your pet</h2>
            <div className="product-list">
                <Product name="dog food" price = "40" />
                <Product name="cat litter" price = "20" />
                <Product name="bird toy" price = "10" />
            </div>
        </div>
    );
}
export default ProductList;