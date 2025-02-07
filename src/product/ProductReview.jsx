import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { menProducts } from "./mens";
import { kidsProducts } from "./Kid";
import { womenProducts } from "./Women";
import { CartContext } from "../product/CartContext";
import "./review.css";

const ProductReview = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Combine products from all categories
  const allProducts = [...menProducts, ...kidsProducts, ...womenProducts];

  // Find the product with the matching slug
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return <h2 className="not-found">Product Review Not Found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  };
  const handleBack = () => {
    // Navigate back to the category page if state is available
    if (location.state?.category) {
      navigate(`/${location.state.category.toLowerCase()}`);
    } else {
      navigate(-1); // Fallback to the previous page
    }
  };
  return (
    <div className="product-review-container">
      {/* Back Button */}
      <button className="font-bold m-2" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="product-detail">
        {/* Product Image */}
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>

        {/* Product Information */}
        <div className="product-info-section">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-ratings">
            ⭐ {product.ratings} ({product.reviews} reviews)
          </div>
          <p className="product-price">
            Rs. {product.price}{" "}
            <span className="sold-count">| Sold: {product.sold}</span>
          </p>
          <p className="product-content">{product.content}</p>
          <div className="product-buttons">
            <button
              className="add-to-cart-button mr-5"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          <ul className="reviews-list">
            {product.reviews.map((review, index) => (
              <li key={index} className="review-item">
                <div className="review-header">
                  <strong>{review.name}</strong> - ⭐ {review.rating}/5
                </div>
                <p className="review-comment">{review.comment}</p>
                <p className="review-date">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </div>
    </div>
  );
};

export default ProductReview;
