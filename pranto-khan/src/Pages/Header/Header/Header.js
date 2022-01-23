import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="banner">
                <NavBar></NavBar>
                <Banner></Banner>

            </div>
        </div>
    );
};

export default Header;