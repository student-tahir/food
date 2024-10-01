import React, { useState } from "react";
import "./TestimonialSlider.css";

const testimonial = [
  {
    name: "Musharraf Bhai",
    text: "Customers expect food to be delivered quickly, and delays can lead to disappointment and loss of business. Quality customer service Customers expect quality customer service along with their food delivery. ",
    image: "images/client2.jpg",
    designation: "Patna-Bihar",
  },

  {
    name: "Saheb Bhai",
    text: "Accuracy: Customers expect to receive the correct order. Transparency Customers appreciate companies that are transparent and have effective communication strategies.",
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
    <div className="testimonial-slider">
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
