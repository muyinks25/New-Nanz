import React, { useState } from 'react';
import { countries } from 'countries-list';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  const [selectedCountry, setSelectedCountry] = useState('DE'); 
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  
  const handleChangeCountry = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    const countryDetails = countries[country];
    console.log(`Form submitted! Selected country: ${country}, Currency: ${countryDetails.currency}`);
    
  };
  
  const handleSubmitNewsletter = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value; 
    setSubmittedEmail(email);
    setNewsletterSubmitted(true);
    console.log(`Newsletter submitted with email: ${email}`);
    
  };

  // Function to handle country form submission
  const handleSubmitCountry = (event) => {

    // Handle form submission logic 
    event.preventDefault();
    
    console.log('Form submitted! Selected Country:', selectedCountry);
  };

  
  const sortedCountries = Object.entries(countries)
    .sort((a, b) => a[1].name.localeCompare(b[1].name));


    
  const handleSocialMediaClick = (platform) => {
    console.log(`Clicked on ${platform}`);
    
  };

  return (
    <footer>
      {/* ... Other footer sections */}

      <div className="footer-section">
  <h3>Connect</h3>
  
  <div>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialMediaClick('Twitter')}>
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialMediaClick('Instagram')}>
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialMediaClick('Facebook')}>
      <i className="fab fa-facebook"></i>
    </a>
    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialMediaClick('TikTok')}>
      <i className="fab fa-tiktok"></i>
    </a>
  </div>
</div>


      <div className="footer-section country-selection">
        <h3>Change Country</h3>
        <form onSubmit={handleSubmitCountry}>
          <label htmlFor="country-drawer-selector-footer" className="select-input__label visually-hidden">Change country and currency</label>
          <select
            name="country_code"
            id="country-drawer-selector-footer"
            className="select-input__el"
            aria-describedby="a11y-refresh-page-message"
            value={selectedCountry}
            onChange={handleChangeCountry}
          >
            {sortedCountries.map(([code, details]) => (
              <option key={code} value={code}>{details.name} ({details.currency})</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>

      

      <div className="footer-section newsletter">
        <h3>Newsletter</h3>
        {newsletterSubmitted && <p>Newsletter submitted with email: {submittedEmail}</p>}
        <form id="NewsletterForm" onSubmit={handleSubmitNewsletter}>
          <input
            type="email"
            id="NewsletterForm--sections--20982205382932__footer"
            name="email" 
            placeholder="Email address"
            required
            aria-required="true"
            autoComplete="email"
            className="field__input"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-section">
        <h3>Privacy Policy</h3>
        <Link to="/privacy-policy">Read our policy</Link>
      </div>

      <div className="footer-section">
        <h3>Return Policy</h3>
        <Link to="/return-policy">Check our return policy</Link>
      </div>

      <div className="footer-section">
        <p>© 2024 - Nans Fashion</p>
      </div>
    </footer>
  );
};

export default Footer;
