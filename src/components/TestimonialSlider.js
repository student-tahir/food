import React, { useState } from "react";
import "./TestimonialSlider.css";

const testimonial = [
  {
    name: "Musharraf Bhai",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem corrupti possimus esse, veniam quasi nostrum adipisci nam? Quibusdam quos itaque ut magnam sed culpa sint. Cumque modi illum eligendi quidem ipsam dolor nulla eius.",
    image: "images/client2.jpg",
    designation: "magna aliqua",
  },

  {
    name: "Saheb Bhai",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem corrupti possimus esse, veniam quasi nostrum adipisci nam? Quibusdam quos itaque ut magnam sed culpa sint. Cumque modi illum eligendi quidem ipsam dolor nulla eius.",
    image: "images/client1.jpg",
    designation: "magna aliqua",
  },
];
const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlepreclick = () => {
    setCurrentIndex(
      (preindex) => (preindex - 1 + testimonial.length) % testimonial.length
    );
  };

  const handleNextclick = () => {
    setCurrentIndex((preindex) => (preindex + 1) % testimonial.length);
  };

  return (
    <div className="testimonial-Slider">
      <h2>What Says Our Customers</h2>
      <div className="testimonial-container">
        {testimonial.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index === currentIndex ? "active" : ""}`}
          >
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <h5>{testimonial.designation}</h5>
          </div>
        ))}
        ;
      </div>

      <div className="testimonial-navigation">
        {testimonial.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`testimonial-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
        ;
      </div>
      <div className="slider-control">
        <button onClick={handlepreclick}>&lt;</button>
        <button onClick={handleNextclick}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
