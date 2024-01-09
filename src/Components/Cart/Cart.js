import React from 'react';
import "./Cart.css"
import ButtonComponent from "../Buttons/ButtonComponent";

function Cart({cartItems,onCheckout}) {

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

    return (
        <div className="cart_container">
            {cartItems.length === 0 ? "No items in cart" : ""}
            <br/>
            <span className="total_price">Total Price : ${totalPrice.toFixed(2)}</span>
            <ButtonComponent title={`${cartItems.length === 0 ? "Order !" : "checkout"}`}
                             type={"checkout"}
                             disable={cartItems.length === 0}
                             onClickHandler={onCheckout}
            />
        </div>
    );
}

export default Cart;