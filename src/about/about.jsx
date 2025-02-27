import React from "react";
import "./AboutUs.css";
import image from "../assets/aboutus/ab1.png";
import image1 from "../assets/aboutus/t1.jpg";
import image2 from "../assets/aboutus/t2.png";
import image3 from "../assets/aboutus/t3.png";
import image4 from "../assets/aboutus/t4.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Welcome Section */}
      <section className="about-welcome">
        <div className="about-text">
          <h2>About Us</h2>
          <h3>Welcome to MyEcommerce</h3>
          <p>
            At MyEcommerce, we combine style, quality, and affordability to
            deliver an exceptional shopping experience. Whether you're looking
            for the latest fashion trends or everyday essentials, we’ve got you
            covered.
          </p>
          <p>
            Explore our vast collection of premium products and join thousands
            of happy customers who trust us for their shopping needs.
          </p>
        </div>
        <div className="about-image">
          <img src={image} alt="Welcome to MyEcommerce" />
        </div>
      </section>

      <section className="about-details">
        <div className="detail-card">
          <div className="detail-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Our Mission</h3>
          <p>
            To provide a world-class shopping platform that delivers
            high-quality products and an exceptional customer experience,
            catering to diverse needs and lifestyles.
          </p>
        </div>
        <div className="detail-card">
          <div className="detail-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3>Our Vision</h3>
          <p>
            To lead the eCommerce industry with innovation, sustainability, and
            trust, creating a platform where customers can shop with confidence.
          </p>
        </div>
        <div className="detail-card">
          <div className="detail-icon">
            <i className="fas fa-award"></i>
          </div>
          <h3>Our Achievements</h3>
          <p>
            Over 1 million satisfied customers, 5-star ratings across all
            categories, and an ever-growing catalog of quality products.
          </p>
        </div>
      </section>

      <section className="about-leadership">
        <h2>Meet Our Leadership Team</h2>
        <div className="leadership-team-cards">
          <div className="team-member-card">
            <img src={image1} alt="CEO" />
            <div className="card-content">
              <h4>Alex Remainn</h4>
              <p>Chief Executive Officer</p>
            </div>
          </div>
          <div className="team-member-card">
            <img src={image2} alt="Director" />
            <div className="card-content">
              <h4>Laxman Sha</h4>
              <p>Managing Director</p>
            </div>
          </div>
          <div className="team-member-card">
            <img src={image3} alt="CMO" />
            <div className="card-content">
              <h4>Peter Parker</h4>
              <p>Chief Marketing Officer</p>
            </div>
          </div>
          <div className="team-member-card">
            <img src={image4} alt="Head of Products" />
            <div className="card-content">
              <h4>Helen Bolt</h4>
              <p>Head of Product Development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
