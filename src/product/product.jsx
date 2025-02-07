import React, { useContext, useState } from "react";
import { CartContext } from "../product/CartContext";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = ({ title, products }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1; // Default quantity is 1 for all products
      return acc;
    }, {})
  );

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id];
    addToCart({ ...product, category: title, quantity });
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  const handleReview = (product) => {
    navigate(`/reviews/${product.slug}`); // Navigate to the review page using slug
  };

  const handleQuantityChange = (productId, delta) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, (prevQuantities[productId] || 1) + delta),
    }));
  };

  return (
    <div className="product-grid-container">
      <h1 className="product-grid-title">{title}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Rs. {product.price}</p>
              <div className="product-rating">
                ⭐ {product.ratings} ({product.reviews} reviews)
              </div>

              {/* Quantity Selector */}
              <div className="product-quantity">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(product.id, -1)}
                >
                  -
                </button>
                <span className="quantity-value">{quantities[product.id]}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(product.id, 1)}
                >
                  +
                </button>
              </div>

              {/* Action Buttons */}
              <div className="product-buttons">
                <button
                  className="review-button"
                  onClick={() => handleReview(product)}
                >
                  Review
                </button>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
