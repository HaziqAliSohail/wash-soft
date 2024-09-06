import React from 'react';
import '../../../styles/components/Services.css';

function Services() {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="service-cards">
                    <div className="card">
                        <h3>Pressure washing</h3>
                        <p>Remove stubborn dirt, grime, and mildew from various surfaces with our powerful pressure washing services, leaving them spotless and refreshed.</p>
                    </div>
                    <div className="card">
                        <h3>House washing</h3>
                        <p>Protect and enhance your home's exterior with our gentle yet effective house washing, ensuring a clean, inviting appearance.</p>
                    </div>
                    <div className="card">
                        <h3>Driveway washing</h3>
                        <p>Eliminate oil stains, dirt, and debris from your driveway, making it look brand new and improving your home's curb appeal.</p>
                    </div>
                    <div className="card">
                        <h3>Roof cleaning</h3>
                        <p>Safeguard your roof from moss, algae, and debris build-up with our professional roof cleaning, extending its lifespan and beauty.</p>
                    </div>
                    <div className="card">
                        <h3>Gutter cleaning</h3>
                        <p>Prevent water damage and keep your gutters functioning optimally with our thorough gutter cleaning services, removing all clogs and debris.</p>
                    </div>
                    <div className="card">
                        <h3>Window cleaning</h3>
                        <p>Enjoy crystal-clear views with our streak-free window cleaning services, bringing more light and clarity to your home or office.</p>
                    </div>
                    <div className="card">
                        <h3>Concrete cleaning</h3>
                        <p>Restore the bright, clean look of your concrete surfaces by removing dirt, stains, and mold with our specialized concrete cleaning services.</p>
                    </div>
                    <div className="card">
                        <h3>Truck wash</h3>
                        <p>Maintain a professional image on the road with our comprehensive truck wash services, keeping your fleet clean and well-maintained.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
