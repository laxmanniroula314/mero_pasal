import React from "react";
import fb from  "../assets/fb.png";
import ins from "../assets/ins.png";
import  x from  "../assets/x.png";
import "./header.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <a href="/" className="footer-link">Home</a>
          <a href="/men" className="footer-link">Men's Fashion</a>
          <a href="/women" className="footer-link">Women's Fashion</a>
          <a href="/kids" className="footer-link">Kids' Fashion</a>
          <a href="/AboutUs" className="footer-link">About</a>
          <a href="/ContactUs" className="footer-link">Contact</a>
        </div>

        {/* Column 2: Contact Info */}
        <div className="footer-column">
          <h4 className="footer-title">Contact Us</h4>
          <p>Address: xyz plaza , KTM</p>
          <p>Phone:98022505255</p>
          <p>Email:<a href="mailto:hamroepasal@gmail.com" className="footer-link">hamroepasal@gmail.com</a></p>
        </div>

         {/* Column 3: Social Media */}
         <div className="footer-column">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={ins} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-text">© 2025 Hamro E-pasal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
