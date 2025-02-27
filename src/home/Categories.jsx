import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import image from "../assets/men.jpg";
import image1 from "../assets/womencat.jpg";
import image2 from "../assets/kid.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Fashion",
      image: image,
      link: "/men",
    },
    {
      id: 2,
      name: "Women's Fashion",
      image: image1,
      link: "/women",
    },
    {
      id: 3,
      name: "Kids Fashion",
      image: image2,
      link: "/kids",
    },
  ];

  return (
    <div className="categories-container">
      <h2 className="categories-title">Shop by Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link to={category.link} key={category.id} className="category-card">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <div className="category-overlay">
              <span className="category-name">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
