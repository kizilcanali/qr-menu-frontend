import React from 'react';
import Navbar from "../../components/navbar/navbar.js"
import FloatingButton from "../../components/floatingButton/floatingButton.js"
import CardInCart from "../../components/cart-card/cartCard.js"

function Cart() {
    return (
        <div className = "home-wrapper">
            <Navbar />
            <CardInCart />
            <FloatingButton />
        </div>
    );
}

export default Cart;
