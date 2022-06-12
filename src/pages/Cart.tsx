import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

const Cart = () => {
    const { cartItems, clearCart } = useContext(Context)
    const [ordered, setOrdered] = useState(false)

    const cartItemElements = cartItems.map(item => <CartItem item={item} />)
    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

    const completeOrder = () => {
        setOrdered(true)
        setTimeout(() => {
            setOrdered(false)
            clearCart()
        }, 3000)
    }

    const placeOrderButton = cartItems.length > 0 && (<div className="order-button">
        <button onClick={completeOrder} >{ordered ? 'Ordering...' : 'Place Order'}</button>
    </div>)

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {placeOrderButton}
        </main>
    )
}

export default Cart