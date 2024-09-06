import React from 'react';
import Slider from 'react-slick';
import '../../../styles/components/Portfolio.css'; 

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const portfolioImages = [
        '/portfolio1.jpeg',
        '/portfolio2.jpeg',
        '/portfolio1.jpeg',
        '/portfolio2.jpeg',
    ];

    return (
        <section className="portfolio-section">
            <div className="container">
                <h2>Our Portfolio</h2>
                <Slider {...settings} className="carousel-border">
                    {portfolioImages.map((image, index) => (
                        <div key={index} className="portfolio-item">
                            <img src={image} alt={`Portfolio ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Portfolio;
