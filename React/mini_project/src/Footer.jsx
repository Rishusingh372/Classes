import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Column */}
          <div className="footer-column">
            <h3 className="footer-heading">RacerCare</h3>
            <p className="footer-about">
              Your premier destination for high-performance motorcycle servicing and custom builds. 
              We combine passion with precision to deliver exceptional results.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#">Performance Tuning</a></li>
              <li><a href="#">Regular Maintenance</a></li>
              <li><a href="#">Custom Builds</a></li>
              <li><a href="#">Engine Rebuilds</a></li>
              <li><a href="#">Dyno Tuning</a></li>
              <li><a href="#">Parts & Accessories</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Racing Street,Bhopal</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>123456789</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@racercare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            @ 2025 RacerCare. All Rights Reserved.
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
        </div>
     
    </footer>
  );
};

export default Footer;