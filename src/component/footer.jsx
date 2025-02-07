import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#2C3E50", // Deep Blue Background
    color: "#FFFFFF", // White Text
    padding: "30px 15px",
    textAlign: "center",
    borderTop: "4px solid #D8345F", // Red-Violet Border
  };

  const footerContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 0",
    gap: "20px", // Spacing between columns
  };

  const columnStyle = {
    flex: "1 1 250px", // Adjust size for better alignment
    margin: "10px 0",
    textAlign: "left",
    minWidth: "200px", // Ensure minimum width for smaller screens
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#D8345F", // Red-Violet Title
    marginBottom: "15px",
  };

  const linkStyle = {
    display: "block",
    textDecoration: "none",
    color: "#FFFFFF", // White Links
    marginBottom: "10px",
    fontSize: "16px",
    transition: "color 0.3s",
  };

  const linkHover = {
    color: "#D8345F", // Red-Violet on Hover
  };

  const socialIconsStyle = {
    display: "flex",
    justifyContent: "start", // Align left
    gap: "15px",
    marginTop: "10px",
  };

  const iconStyle = {
    fontSize: "22px",
    color: "#FFFFFF", // White Icons
    cursor: "pointer",
    transition: "color 0.3s",
  };

  const iconHover = {
    color: "#D8345F", // Red-Violet on Hover
  };

  const textStyle = {
    marginTop: "10px",
    fontSize: "18px",
    color: "#FFFFFF",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        {/* Column 1: Quick Links */}
        <div style={columnStyle}>
          <h4 style={titleStyle}>Quick Links</h4>
          <a
            href="/"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Home
          </a>
          <a
            href="/men"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Mens fashion
          </a>
          <a
            href="/women"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            women fashion
          </a>
          <a
            href="/kids"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            kids fashion
          </a>
          <a
            href="/AboutUs"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            About
          </a>
          <a
            href="/ContactUs"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Contact
          </a>
        </div>

        {/* Column 2: Contact Info */}
        <div style={columnStyle}>
          <h4 style={titleStyle}>Contact Us</h4>
          <p>Address: 123 Ecommerce St, ShopCity</p>
          <p>Phone: +1 234 567 890</p>
          <p>
            Email:{" "}
            <a href="mailto:support@myecommerce.com" style={linkStyle}>
              support@myecommerce.com
            </a>
          </p>
        </div>

        {/* Column 3: Social Media */}
        <div style={columnStyle}>
          <h4 style={titleStyle}>Follow Us</h4>
          <div style={socialIconsStyle}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseOver={(e) => (e.target.style.color = iconHover.color)}
              onMouseOut={(e) => (e.target.style.color = iconStyle.color)}
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseOver={(e) => (e.target.style.color = iconHover.color)}
              onMouseOut={(e) => (e.target.style.color = iconStyle.color)}
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseOver={(e) => (e.target.style.color = iconHover.color)}
              onMouseOut={(e) => (e.target.style.color = iconStyle.color)}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p style={textStyle}>© 2025 MyEcommerce. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
