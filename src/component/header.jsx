import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../product/CartContext";
import CartPopout from "../product/CartPopout";
import "./Header.css";

const Header = () => {
  const { cart, removeFromCart } = useContext(CartContext); // Access cart and removeFromCart from context
  const [showCart, setShowCart] = useState(false); // State to toggle cart pop-out
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items in the cart

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        MyEcommerce
      </Link>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Navigation */}
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <div className="nav-link dropdown">
          Products
          <div className="dropdown-menu">
            <Link to="/men" className="dropdown-item">
              Men's Wear
            </Link>
            <Link to="/women" className="dropdown-item">
              Women's Wear
            </Link>
            <Link to="/kids" className="dropdown-item">
              Kids' Wear
            </Link>
          </div>
        </div>
        <Link to="/AboutUs" className="nav-link">
          About Us
        </Link>
        <Link to="/ContactUs" className="nav-link">
          Contact Us
        </Link>
      </nav>

      {/* Profile and Cart Icons */}
      <div className="profile-cart">
        <Link to="/ProfilePage" className="profile-icon">
          Profile
        </Link>
        <div className="cart-icon" onClick={() => setShowCart((prev) => !prev)}>
          🛒
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </div>
        {showCart && (
          <CartPopout
            cart={cart}
            onClose={() => setShowCart(false)}
            removeFromCart={removeFromCart} // Pass removeFromCart function
          />
        )}
      </div>
    </header>
  );
};

export default Header;
