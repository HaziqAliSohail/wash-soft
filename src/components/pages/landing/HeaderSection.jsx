import React, { useState } from 'react';
import '../../../styles/components/Header.css'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src="/logo-large.png" alt="MJ Rapid Wash" />
                </div>
                <nav className={isOpen ? "navbar open" : "navbar"}>
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="#home">Home</a></li>
                        <li className="navbar-item"><a href="#services">Services</a></li>
                        <li className="navbar-item"><a href="#testimonials">Testimonials</a></li>
                        <li className="navbar-item"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;

