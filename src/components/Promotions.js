import React from "react";
import "./Promotions.css";
import { FaShoppingCart } from "react-icons/fa";

const Promotions = () => {
  return (
    <div className="promotions">
      <div className="promotion-card">
        <img src="./images/f3.png.jfif" alt="maggie" />

        <div className="promotion-content">
          <div className="promotion-title">Tasty Fridays</div>
          <div className="promotion-discount">20% off</div>
          <button className="order-button">
            Order Now <FaShoppingCart />
          </button>
        </div>
      </div>

      <div className="promotion-card">
        <img src="./images/f4.png.jfif" alt="sandwich" />

        <div className="promotion-content">
          <div className="promotion-title">Tasty Fridays</div>
          <div className="promotion-discount">20% off</div>
          <button className="order-button">
            Order Now <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Promotions;
