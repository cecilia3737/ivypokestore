import React from 'react'
import cart from "../../shared/img/cart.png"
import "./Cart.css"

export const Cart = () => {
    return (
        <div>
            <img className="cart-icon" src={cart} alt="shopping basket icon"></img>
        </div>
    )
}
