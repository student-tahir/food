import React, { useState } from "react";
import "./Navbar.css";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Sea Beach</h1>
      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <a href="home">Home</a>
        <a href="menu">Menu</a>
        <a href="about">About</a>
        <a href="Book-Table">Book Table</a>
        <FaUser className="nav-icon"></FaUser>
        <FaShoppingCart className="nav-icon"></FaShoppingCart>
        <FaSearch className="nav-icon"></FaSearch>
        <FaBars className="nav-icon"></FaBars>
        <button className="order-button">Order Online</button>
      </div>
      <div className="Mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
