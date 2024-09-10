import React, { useState, useEffect } from 'react';
import '../../../styles/components/Header.css'; 
import $ from "jquery"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarColor, setNavbarColor] = useState(false);

  useEffect(() => {
    $(document).on('scroll', function() {
        if ($('#services').position().top){
            let services_top = $('#services').position().top - 50;
            let navbar_height = $('.navbar').first().height();
            if ($(this).scrollTop() >= (services_top-navbar_height)) {
                setNavbarColor(true);
            } else {
                setNavbarColor(false);
            }
        }
    });
  }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='header'>
            <div className={navbarColor ? 'header-container active' : 'header-container'}>
                <div className="logo">
                    <img src="/logo-large.png" alt="MJ Rapid Wash"/>
                </div>
                <nav className={isOpen ? "navbar open" : "navbar"}>
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="#home">Home</a></li>
                        <li className="navbar-item"><a href="#services">Services</a></li>
                        <li className="navbar-item"><a href="#testimonials">Testimonials</a></li>
                        <li className="navbar-item"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className={isOpen ? "menu-toggle open" : "menu-toggle"} onClick={toggleMenu}>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;

