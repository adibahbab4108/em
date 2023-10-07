import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, item) => total + item.price, 0);

    let shipping=0;
    if(total>35)shipping = 0;
    else if(total>15)shipping =4.99;
    else if(total>0)shipping =10.99;
    // else shipping=12.99;
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered:{cart.length}</p>
            <p>Shipping Const:{shipping}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;