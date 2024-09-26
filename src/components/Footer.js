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
          Call +91 8789502255
        </p>
        <p>
          <FaEnvelope />
          xyz@gmail.com
        </p>
      </div>

      <div className="footer-section">
        <h3>frame</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
          odio totam necessitatibus repellendus odit, voluptatem eius, et
          reiciendis in exercitationem architecto, qui suscipit laudantium
          tempore aperiam ex enim quia eveniet corporis libero iste.
        </p>
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
        <p>10.00 Am _10.00m</p>
      </div>

      <div className="footer-bottom">
        <p>@ 2024 All right Reserved Vy Free Apoorv</p>
        <p>@ distributed by Apoorv</p>
      </div>
    </footer>
  );
};

export default Footer;
