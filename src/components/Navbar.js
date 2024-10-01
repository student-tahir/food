import React, { useState } from "react";
import "./Navbar.css";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Sea Beach Cafe</h1>
      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="menu" smooth={true} duration={500}>
          Menu
        </Link>
        <Link to="Book-Table" smooth={true} duration={500}>
          Book Table
        </Link>
        <Link to="testimonial-slider" smooth={true} duration={500}>
          Review
        </Link>
        <FaUser className="nav-icon" />
        <FaShoppingCart className="nav-icon" />
        <FaSearch className="nav-icon" />
      </div>
      <div className="Mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
