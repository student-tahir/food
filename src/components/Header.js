import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Carousel
          showThums={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showArrows={false}
        >
          <div className="slider-text">
            <h2>Fast Food Restaurant</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo recusandae expedita, laboriosam corrupti velit eveniet
              officia, ipsum earum sit reiciendis enim tempore quasi molestiae!
              Autem provident corporis saepe! Hic quia nam consectetur
              dignissimos architecto.
            </p>
            <button className="order-button">Order Now</button>
          </div>

          <div className="slider-text">
            <h2>Delicious Meals</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo recusandae expedita, laboriosam corrupti velit eveniet
              officia, ipsum earum sit reiciendis enim tempore quasi molestiae!
              Autem provident corporis saepe! Hic quia nam consectetur
              dignissimos architecto.
            </p>
            <button className="order-button">Order Now</button>
          </div>
        </Carousel>
      </div>
    </header>
  );
};

export default Header;
