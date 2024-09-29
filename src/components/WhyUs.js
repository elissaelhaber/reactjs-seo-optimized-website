import React from 'react'; 
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO metadata
import './Why-us.css';

function WhyUs() {
  return (
    <section id="why-us">
      <Helmet>
        <title>Why Choose Hamster POS - Reliable POS Solutions</title>
        <meta name="description" content="Discover why Hamster POS is the right choice for your business. Explore our extensive client base, 24/7 support, and advanced applications." />
        <meta name="keywords" content="Hamster POS, POS Solutions, Customer Care, 24/7 Support" />
      </Helmet>

      <h2>Why Hamster POS?</h2>
      <p>Big enough to cover all your needs, but we treat every customer with care and love.</p>
      <div className="table-container">
        <table className="styled-table">
          <tbody>
            <tr>
              <td>10,000+ Clients</td>
              <td>27 Countries</td>
            </tr>
            <tr>
              <td>24/7 Support</td>
              <td>25 Apps</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default WhyUs;
