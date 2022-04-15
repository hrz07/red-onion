import React from 'react';
import logo from '../../images/logo2.png'
import { BsCart3 } from 'react-icons/bs';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='loginBox'>
                <BsCart3 className='cart'/>
                <button>Login</button>
            </div>
        </div>
    );
}

export default Header;
