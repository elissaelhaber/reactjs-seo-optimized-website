import React from 'react';
import { Helmet } from 'react-helmet-async';  // Ensure this is from react-helmet-async
import './index.css';  // Link your CSS file
import Header from './components/Header';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* SEO metadata using Helmet */}
      <Helmet>
        <title>HamsterPOS - Leading POS Solutions for Retail and Hospitality</title>
        <meta name="description" content="HamsterPOS offers powerful point-of-sale solutions tailored for retail and hospitality businesses. Manage your operations efficiently with our advanced features." />
        <meta name="keywords" content="POS, Point of Sale, HamsterPOS, Retail Solutions, Hospitality Solutions" />
        <meta property="og:title" content="HamsterPOS - POS Solutions" />
        <meta property="og:description" content="Discover how HamsterPOS can streamline your business management with cutting-edge POS technology." />
        <meta property="og:url" content="https://hamsterpos.com" />
      </Helmet>

      {/* Your components */}
      <Header />
      <Services />
      <WhyUs />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
