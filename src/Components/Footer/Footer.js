import React from 'react';
import logo from '../../images/logo.png'
import './Footer.css'


const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerLogoBox'>
                <img src={logo} alt="" />
                <small>Copyright © 2020 Online food</small>
                
            </div>
            <div>
                <p>About Red Onion</p>
                <p>Read our blog</p>
                <p>Sign up to deliver</p>
                <p>Add your restaurant</p>
                <p>About Red Onion</p>
            </div>
            <div>
                <p>Get help</p>
                <p>Read FAQs</p>
                <p>View all cities</p>
                <p>Restaurant near me</p>
                <p>Terms of Use</p>
            </div>
        </div>
    );
}

export default Footer;
