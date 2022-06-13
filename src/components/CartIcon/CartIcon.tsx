import React, { useContext } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Context } from '../../Context';
import './CartIcon.scss'

const CartIcon = () => {
  const { cartItems } = useContext(Context);
  return (
    <Link to="/cart" className='cart-icon-container' >
      <p>{cartItems.length > 0 ? cartItems.length : 0}</p>
      <BsCart2 size="1.5em" className='cart-icon' />
    </Link>
  )
}

export default CartIcon