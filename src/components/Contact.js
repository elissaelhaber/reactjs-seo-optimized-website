import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO metadata
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <Helmet>
        <title>Contact Us - HamsterPOS</title>
        <meta name="description" content="Get in touch with HamsterPOS to learn more about our services and how we can help your business." />
        <meta name="keywords" content="Contact, HamsterPOS, Point of Sale Solutions, Customer Support" />
      </Helmet>

      <h2>We Would Love To Work Together</h2>
      <a href="#" className="contact-button">Contact Us</a>
    </section>
  );
}

export default Contact;
