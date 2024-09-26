import React, { useState } from "react";
import "./Menu.css";
import { FaShoppingCart } from "react-icons/fa";

const menuItems = [
  {
    category: "burger",
    Name: "Delicious burger",
    Price: "$20",
    Image: "/images/f2.png.jpg",
  },
  {
    category: "Maggie",
    Name: "Tasty Maggie",
    Price: "$20",
    Image: "/images/f3.png.jfif",
  },
  {
    category: "Sandwich",
    Name: "Delicious sandwich",
    Price: "$20",
    Image: "/images/f4.png.jfif",
  },
  {
    category: "Patties",
    Name: "Tasty Patties",
    Price: "$20",
    Image: "/images/f5.png",
  },
  {
    category: "Fries",
    Name: "French Fries",
    Price: "$20",
    Image: "/images/f6.png",
  },
  {
    category: "momo",
    Name: "Delicious momo",
    Price: "$20",
    Image: "/images/f7.png",
  },
  {
    category: "tea",
    Name: "Delicious tea",
    Price: "$20",
    Image: "/images/f8.png",
  },
  {
    category: "shake",
    Name: "Delicious shake",
    Price: "$20",
    Image: "/images/f9.png",
  },
];

const category = [
  "All",
  "burger",
  "Fries",
  "momo",
  "Maggie",
  "Patties",
  "tea",
  "shake",
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-categories">
        {category.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {filteredItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.Image} alt={item.Name} />

            <div className="menu-card-content">
              <h3>{item.Name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                repudiandae dolorem atque debitis facilis, minima id quia
                commodi eaque perferendis optio repellat animi cum minus.
                Delectus ratione tempora consequatur eaque deserunt aspernatur,
                eveniet a.tahir
              </p>
              <div className="Menu-card-price">{item.Price}</div>
              <button className="order-button">
                Order Now
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
