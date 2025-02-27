import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../product/CartContext";
import CartPopout from "../product/CartPopout";
import searchIcon from "../assets/search.png";
import userIcon from "../assets/user.png";
import "./Header.css";

const Header = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <header className="header">
  
      <Link to="/" className="logo">
        Hamro E-Pasal
      </Link>

    
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <img src={searchIcon} alt="Search" className="search-icon" />
        </button>
      </form>

      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <div className="nav-link dropdown">
          Products
          <div className="dropdown-menu">
            <Link to="/men" className="dropdown-item">
              Men's 
            </Link>
            <Link to="/women" className="dropdown-item">
              Women's 
            </Link>
            <Link to="/kids" className="dropdown-item">
              Kid's 
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

      <div className="profile-cart">
        <Link to="/ProfilePage" className="profile-icon">
          <img src={userIcon} alt="Profile" className="user-icon" />
        </Link>
        <div className="cart-icon" onClick={() => setShowCart((prev) => !prev)}>
          🛒
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </div>
        {showCart && (
          <CartPopout
            cart={cart}
            onClose={() => setShowCart(false)}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
