import React from 'react';
import '../../../styles/components/Testimonials.css';

function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <h2>What Our Clients Say</h2>
                <div className="testimonials-cards">
                    <div className="card">
                        <p>"Mj Rapid Wash made my home look brand new again!"</p>
                        <h4>– John Doe</h4>
                    </div>
                    <div className="card">
                        <p>"Professional and affordable service. Highly recommended!"</p>
                        <h4>– Jane Smith</h4>
                    </div>
                    <div className="card">
                        <p>"Excellent work, great attention to detail."</p>
                        <h4>– Michael Johnson</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
