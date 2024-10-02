// src/TestimonialSlider.js
import React, { useState } from "react";
import "./TestimonialSlider.css"; // CSS file for styling

const testimonials = [
  {
    name: "Musharraf Bhai",
    text: "Customers expect food to be delivered quickly, and delays can lead to disappointment and loss of business. Quality customer service is essential.",
    image: "images/client2.jpg", // Use placeholder images or your own images
    designation: "Patna-Bihar",
  },
  {
    name: "Saheb Bhai",
    text: "Accuracy: Customers expect to receive the correct order. Transparency is crucial in effective communication.",
    image: "images/client1.jpg", // Use placeholder images or your own images
    designation: "Mumbai",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-slider">
      <h2>What Our Customers Say</h2>
      <div
        className="testimonial-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial">
            <img
              src={item.image}
              alt={item.name}
              className="testimonial-image"
            />
            <p>{item.text}</p>
            <h4>{item.name}</h4>
            <h5>{item.designation}</h5>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevClick}>&lt;</button>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
