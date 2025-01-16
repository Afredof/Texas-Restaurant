import React from 'react';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        // Optionally clear form fields
        e.target.reset();
    };

    return (
        <div className="contact-page">
            <ToastContainer />
            
            <h1 className='c1'>Contact Us</h1>
            <section className="contact-info">
                <div className="info-item">
                    <h3>Our Address</h3>
                    <p>123 Texas Road, Dallas, TX 75201</p>
                </div>
                <div className="info-item">
                    <h3>Phone</h3>
                    <p>(123) 456-78903</p>
                </div>
                <div className="info-item">
                    <h3>Email</h3>
                    <p>info@texasrestaurant.com</p>
                </div>
            </section>

            <section className="contact-form-section">
                <h2>Get in Touch</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </section>

            <section className="map-section">
                <h2>Find Us</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26477.90483551913!2d-96.7969879!3d32.7766642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9927d44e11b1%3A0x5a073cb8c2f6d3b4!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1674576838019!5m2!1sen!2sus"
                        title="Google Map"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
