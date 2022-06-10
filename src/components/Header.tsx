import React from 'react';
import { Link } from 'react-router-dom';
import Photos from '../pages/Photos';
import { FaBeer } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h2>Picture</h2>
            </Link>
            <Link to='/cart'>
                <FaBeer size={'2em'} />
            </Link>
        </header>
    )
}

export default Header