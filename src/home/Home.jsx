import React from "react";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import TrendingProducts from "./TrendingProducts";
import Newsletter from "./Newsletter";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <HeroSection />
      <Categories />
      <TrendingProducts />
      <Newsletter />
    </div>
  );
};

export default HomePage;
