import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./product/CartContext";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./home/Home";
import CheckoutPage from "./product/CheckoutPage";
import AboutUs from "./about/About";
import ContactUs from "./contact/Contact";
import ProductReview from "./product/ProductReview";
import KidsProductPage from "./product/Kid";
import MenProductPage from "./product/mens";
import WomenProductPage from "./product/Women";
import ProductPage from "./product/product";
import ProfilePage from "./profile/profile";

const NotFound = () => <h2>Page Not Found</h2>;

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/kids" element={<KidsProductPage />} />
          <Route path="/men" element={<MenProductPage />} />
          <Route path="/women" element={<WomenProductPage />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />

          <Route path="/reviews/:slug" element={<ProductReview />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
