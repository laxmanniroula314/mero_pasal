import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import image from "../assets/shopnow.jpg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Discover Your Style</h1>
        <p className="hero-subtitle">
          Explore the latest trends and enjoy exclusive offers on your favorite
          brands.
        </p>
        <Link to="/men" className="hero-button">
          Shop Now
        </Link>
      </div>
      <div className="hero-image-container">
        <img src={image} alt="Fashion and Style" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
