import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Context, PhotosType } from "../Context";

type CartItemTypes = {
  item: PhotosType,
}

const CartItem = ({ item }: CartItemTypes) => {
  const { updateCart } = useContext(Context)
  return (
    <div className="cart-item">
      <FaTrash size={'2em'} color='blue' onClick={() => updateCart(item)} />
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem