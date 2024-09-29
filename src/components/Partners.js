import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO metadata
import './Partner.css'; 
import partner1 from './partner1.png'; 
import partner2 from './partner2.jpg';
import partner3 from './partner3.gif';
import partner4 from './partner4.png';
import partner5 from './partner5.png';
import partner6 from './partner6.png';

function Partners() {
  return (
    <section id="partners">
      <Helmet>
        <title>Our Partners - HamsterPOS</title>
        <meta name="description" content="Meet our partners who help deliver exceptional services with HamsterPOS." />
        <meta name="keywords" content="HamsterPOS, Partners, POS Solutions, Business Partners" />
      </Helmet>

      <h2>Our Partners</h2>
      <div className="partners-grid">
        <div className="partner-box"><img src={partner1} alt="Tally Weijl" loading="lazy" /></div>
        <div className="partner-box"><img src={partner2} alt="Scketchers" loading="lazy" /></div>
        <div className="partner-box"><img src={partner3} alt="Kickers" loading="lazy" /></div>
        <div className="partner-box"><img src={partner4} alt="Boss" loading="lazy" /></div>
        <div className="partner-box"><img src={partner5} alt="Pizza Hut" loading="lazy" /></div>
        <div className="partner-box"><img src={partner6} alt="Suchi Star" loading="lazy" /></div>
      </div>
    </section>
  );
}

export default Partners;
