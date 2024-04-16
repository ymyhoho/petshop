import React from 'react';

function Product(props){
    return(        
        <div className = "product">
            <h3>{props.name}</h3>
            <p>${props.price}</p>
            <button>Add Cart</button>
        </div>
    );
}

export default Product;