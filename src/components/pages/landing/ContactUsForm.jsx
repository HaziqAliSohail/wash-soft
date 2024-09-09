import React, { useRef } from 'react';
import '../../../styles/components/Contact.css';
import emailjs from 'emailjs-com';
import {API_KEY, EMAIL_TEMPLATE_ID, SERVICE_ID} from '../../../config';

function Contact() {
    const name = useRef('');
    const email = useRef('');
    const message = useRef('');

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        const template = {
            from_name: name.current,
            from_email: email.current,
            message: message.current,
        }

        await emailjs.send(
            SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            template,
            API_KEY
        ).then((res) => {
            console.log('email sent successfully!');
        }).catch((err) => {
            console.log('something went wrong!')
        });

        name.current = "";
        email.current = "";
        message.current = "";

    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Your Name"  onChange={e=>name.current = e.currentTarget.value} required/>
                    <input type="email" placeholder="Your Email"  onChange={e=>email.current = e.currentTarget.value} required />
                    <textarea placeholder="Your Message" onChange={e=>message.current = e.currentTarget.value} required></textarea>
                    <button type="submit" onClick={handleSubmit}>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
