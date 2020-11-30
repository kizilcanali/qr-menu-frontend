import React from 'react';
import Navbar from "../../components/navbar/navbar.js"
import FloatingButton from "../../components/floatingButton/floatingButton.js"
import CardInCart from "../../components/cart-card/cartCard.js"

function Cart() {
    return (
        <div className = "home-wrapper">
            <Navbar />
            <CardInCart
               name = "Kerhane Tatlısı"
               price = "55"
            />
            <CardInCart
               name = "Kıymalı Pide"
               price = "55"
            />
            <CardInCart
               name = "Şekerpare"
               price = "55"
            />
            <CardInCart
               name = "Ambalı Tatlısı"
               price = "55"
            />
            <FloatingButton />
        </div>
    );
}

export default Cart;
