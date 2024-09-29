import React from 'react';
import './Header.css'; 
import { Helmet } from 'react-helmet-async'; // Import Helmet

function Header() {
  return (
    <header>
      {/* SEO metadata for header */}
      <Helmet>
        <title>HamsterPOS - Your Reliable POS Solutions</title>
        <meta name="description" content="Explore HamsterPOS, the best point-of-sale solutions for retail and hospitality businesses." />
      </Helmet>


      <nav className="navbar">
        <div className="logo">
          <img src="logo-pos.png" alt="HamsterPOS Logo - Your Trusted POS Partner" loading="lazy"/>
        </div>
        
        {/* Menu Items */}
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Always Think Bigger</h1>
      </div>
    </header>
  );
}

export default Header;
