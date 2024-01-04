// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
            <Link to="/about" className="footer-link">About</Link>
            <span className="footer-separator"> | </span>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <span className="footer-separator"> | </span>
                <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
                <span className="footer-separator"> | </span>
                <p className="footer-text">© 2023 Pokemon Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
