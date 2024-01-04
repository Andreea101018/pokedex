import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logoImage from "../styles/images/International_Pokémon_logo.svg.png"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <Link to="/" className="nav-logo">
                    <img src={logoImage} alt="Logo" className="logo-img" />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
