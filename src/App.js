import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from './components/pages/landing/HeaderSection'
import Hero from './components/pages/landing/HeroSection';
import Portfolio from './components/pages/landing/PortfolioSection';
import Services from './components/pages/landing/ServicesSection';
import Testimonials from './components/pages/landing/TestimonialsSection';
import Contact from './components/pages/landing/ContactUsForm';
import Footer from './components/pages/landing/FooterSection';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
