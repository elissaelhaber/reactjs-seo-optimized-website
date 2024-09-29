import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import './Services.css'; 
import restaurantImg from './restaurant.jpg'; 
import retailImg from './retail.jpeg'; 
function Services() {
  return (
    <section id="services">
      <Helmet>
        <title>Our Services - HamsterPOS</title>
        <meta name="description" content="Explore our Restaurant and Retail POS solutions tailored for your business needs." />
        <meta name="keywords" content="Restaurant POS, Retail POS, HamsterPOS, Point of Sale Solutions" />
        <meta property="og:title" content="Our Services - HamsterPOS" />
        <meta property="og:description" content="Discover effective POS solutions to enhance your business operations." />
        <meta property="og:url" content="https://hamsterpos.com" />
      </Helmet>

      <h2>Our Services</h2>
      
      {/* First section with image on the left, text on the right */}
      <div className="service-content">
        <div className="service-image">
          <img src={restaurantImg} alt="Restaurant Point of Sale System" loading="lazy" />
        </div>
        <div className="service-text">
          <h3>Restaurant & Hospitality POS</h3> {/* Use H3 for subsections */}
          <p>
            We use only the finest hotel-grade ingredients in the design of 
            our point-of-sale systems so you can deliver amazing guest 
            experiences wherever your guests are: at the table, on the patio, 
            or online.
          </p>
          <a href="#" className="service-button">Discover our restaurant software</a>
        </div>
      </div>

      {/* Second section with text on the left, image on the right */}
      <div className="service-content reverse">
        <div className="service-text">
          <h3>Retail POS</h3> {/* Use H3 for subsections */}
          <p>
            Reinvent your business with the Omnichannel Point of Sale System. 
            Get ready for the next era of commerce with an advanced eCom 
            solution, omnichannel loyalty, and contactless payments.
          </p>
          <a href="#" className="service-button">Explore our retail software</a>
        </div>
        <div className="service-image">
          <img src={retailImg} alt="Retail Point of Sale System" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Services;
