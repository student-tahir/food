import React from "react";
import {
  FaMapMarkedAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>
          <FaMapMarkedAlt /> Location
        </p>
        <p>
          <FaPhone />
          +91 8789502255
        </p>
        <p>
          <FaEnvelope />
          tahirperwaiz786@gmail.com
        </p>
      </div>

      <div className="footer-section">
        <h3>Sea Beach</h3>
        <p>sidhi ghat, opp. Pilar no-159 Sadikpur, Patna,Bihar 800008</p>
      </div>
      <div className="social-icons">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaInstagram />
        <FaPinterest />
      </div>

      <div className="footer-section">
        <h3>Opening House</h3>
        <p>Everyday</p>
        <p>10.00 Am _10.00pm</p>
      </div>

      <div className="footer-bottom">
        <p>@ 2024 All right Reserved by Free Aproved</p>
        <p>@ distributed by Sea Beach</p>
      </div>
    </footer>
  );
};

export default Footer;
