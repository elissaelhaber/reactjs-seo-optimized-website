import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO metadata
import './Footer.css'; 

function Footer() {
  return (
    <>
      <Helmet>
        <title>HamsterPOS</title>
        <meta name="description" content="Contact HamsterPOS for inquiries about our services. Location, phone number, and email are provided." />
        <meta name="keywords" content="HamsterPOS, Contact Information, POS Solutions, Business Location" />
        {/* JSON-LD Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "HamsterPOS",
              "telephone": "+961 76671245",
              "email": "info@hamsterpos.com",
              "url": "https://hamsterpos.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mtayleb main road, Kababji building, Hamster POS, 1st floor",
                "addressLocality": "Mtayleb",
                "addressRegion": "LB",
                "postalCode": "",
                "addressCountry": "LB"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
            }
          `}
        </script>
      </Helmet>

      <footer className="footer">
        <div className="footer-content">
          <h3>HamsterPOS</h3>
          <p>Location: Mtayleb main road, Kababji building, Hamster POS, 1st floor, Mtayleb, LB</p>
          <p>Phone: <a href="tel:+96176671245">+961 76671245</a></p>
          <p>Email: <a href="mailto:info@hamsterpos.com">info@hamsterpos.com</a></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
