import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCart, BsCartFill } from 'react-icons/bs'
import { Context } from '../Context';

const Header = () => {
    const { cartItems } = useContext(Context)
    return (
        <header>
            <Link to='/'>
                <h2>Picture</h2>
            </Link>
            <Link to='/cart'>
                {cartItems.length === 0 ? <BsCart size={'2em'} /> : <BsCartFill size={'2em'} /> }
            </Link>
        </header>
    )
}

export default Header