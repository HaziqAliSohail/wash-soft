import React from 'react';
import '../../../styles/components/Hero.css';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="video-background">
                <video autoPlay loop muted playsInline className="video1">
                    <source src="/video2.mp4" type="video/mp4" />
                </video>
                <video autoPlay loop muted playsInline className="video2">
                    <source src="/video1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <h1>Effortless Clean, Superior Shine</h1>
                <p>Professional Exterior Services for a Pristine Look</p>
                <a href="#contact" className="cta-btn">Get a Free Quote</a>
            </div>
        </section>
    );
}

export default Hero;
