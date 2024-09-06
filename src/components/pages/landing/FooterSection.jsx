import React from 'react';
import '../../../styles/components/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <p>&copy; 2024 MJ Rapid Wash. All rights reserved.</p>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="social-media">
                    <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.png" alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
                        <img src="/insta.png" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
