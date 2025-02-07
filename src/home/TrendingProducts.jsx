import React, { useContext } from "react";
import "./TrendingProducts.css";
import { CartContext } from "../product/CartContext";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/mencloth/5th.jpg";
import image2 from "../assets/womencloth/c.jpg";
import image3 from "../assets/kidcloth/vi.jpg";
import image4 from "../assets/mencloth/3rd.jpg";
import image5 from "../assets/womencloth/d.jpg";
import image6 from "../assets/kidcloth/viii.jpg";
import image7 from "../assets/mencloth/8th.jpg";
import image8 from "../assets/womencloth/e.jpg";
import image9 from "../assets/kidcloth/i.jpg";

const TrendingProducts = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const trendingProducts = [
    {
      id: 1,
      category: "Men's Fashion",
      name: "Men's Watch",
      price: 1999,
      image: image1,
      slug: "mens-watch",
    },
    {
      id: 2,
      category: "Women's Fashion",
      name: "Women's Handbag",
      price: 1499,
      image: image2,
      slug: "womens-handbag",
    },
    {
      id: 3,
      category: "Kids' Fashion",
      name: "Kids' Sunglasses",
      price: 499,
      image: image3,
      slug: "kids-sunglasses",
    },
    {
      id: 4,
      category: "Men's Fashion",
      name: "Men's Sneakers",
      price: 2499,
      image: image4,
      slug: "mens-sneakers",
    },
    {
      id: 5,
      category: "Women's Fashion",
      name: "Women's Earrings",
      price: 399,
      image: image5,
      slug: "womens-earrings",
    },
    {
      id: 6,
      category: "Kids' Fashion",
      name: "Kids' Backpack",
      price: 1199,
      image: image6,
      slug: "kids-backpack",
    },
    {
      id: 7,
      category: "Men's Fashion",
      name: "Men's Belt",
      price: 399,
      image: image7,
      slug: "mens-belt",
    },
    {
      id: 8,
      category: "Women's Fashion",
      name: "Women's Scarf",
      price: 299,
      image: image8,
      slug: "womens-scarf",
    },
    {
      id: 9,
      category: "Kids' Fashion",
      name: "Kids' T-shirt",
      price: 299,
      image: image9,
      slug: "kids-tshirt",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  };

  const handleRedirect = (product) => {
    if (product.category === "Men's Fashion") {
      navigate(`/mens`);
    } else if (product.category === "Women's Fashion") {
      navigate(`/women`);
    } else if (product.category === "Kids' Fashion") {
      navigate(`/kids`);
    }
  };

  return (
    <div className="trending-container">
      <h2 className="trending-title">Trending Products</h2>
      <div className="trending-grid">
        {trendingProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={`${product.name} - ${product.category}`}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">Rs. {product.price}</p>
              <div className="product-buttons">
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="view-product-button"
                  onClick={() => handleRedirect(product)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
