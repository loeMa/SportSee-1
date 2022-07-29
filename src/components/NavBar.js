import React from 'react';
import '../styles/components/navbar.css';
import logo from '../assets/img/logo.png';
import Navigation from './Navigation';

const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt='logo sportsee' />
            <Navigation />
            
        </div>
    );
};

export default NavBar;