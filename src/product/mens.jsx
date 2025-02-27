import React from "react";
import ProductPage from "../product/product";
import image1 from "../assets/mencloth/m1.jpg";
import image2 from "../assets/mencloth/m2.jpg";
import image3 from "../assets/mencloth/m3.jpg";
import image4 from "../assets/mencloth/m4.jpg";
import image5 from "../assets/mencloth/m5.jpg";
import image6 from "../assets/mencloth/m6.jpg";
import image7 from "../assets/mencloth/m7.jpg";
import image8 from "../assets/mencloth/m8.jpg";
import image9 from "../assets/mencloth/m9.jpg";
export const menProducts = [
  {
    id: 1,
    name: "Men's T-shirt",
    price: 499,
    sold: "1.2K",
    ratings: 4.6,
    reviews: 200,
    image: image1,
    slug: "mens-tshirt",
    content:
      "Classic and comfortable t-shirt for men, perfect for casual outings and daily wear.",
  },
  {
    id: 2,
    name: "Men's Jeans",
    price: 1299,
    sold: "800",
    ratings: 4.7,
    reviews: 150,
    image: image2,
    slug: "mens-jeans",
    content:
      "Durable and stylish jeans designed for all-day comfort and a modern look.",
  },
  {
    id: 3,
    name: "Men's Sneakers",
    price: 2499,
    sold: "500",
    ratings: 4.8,
    reviews: 180,
    image: image3,
    slug: "mens-sneakers",
    content:
      "Trendy and comfortable sneakers for men, perfect for casual and sports activities.",
  },
  {
    id: 4,
    name: "Men's Formal Shirt",
    price: 799,
    sold: "1K",
    ratings: 4.5,
    reviews: 210,
    image: image4,
    slug: "mens-formal-shirt",
    content:
      "Elegant formal shirt for men, ideal for office wear and formal occasions.",
  },
  {
    id: 5,
    name: "Men's Watch",
    price: 1999,
    sold: "600",
    ratings: 4.9,
    reviews: 320,
    image: image5,
    slug: "mens-watch",
    content:
      "Sophisticated and stylish wristwatch for men, perfect for completing your look.",
  },
  {
    id: 6,
    name: "Men's Sunglasses",
    price: 899,
    sold: "750",
    ratings: 4.7,
    reviews: 140,
    image: image6,
    slug: "mens-sunglasses",
    content:
      "Trendy sunglasses with UV protection, ideal for outdoor activities and sunny days.",
  },
  {
    id: 7,
    name: "Men's Hoodie",
    price: 1499,
    sold: "950",
    ratings: 4.6,
    reviews: 170,
    image: image7,
    slug: "mens-hoodie",
    content:
      "Cozy and stylish hoodie for men, perfect for chilly weather and casual wear.",
  },
  {
    id: 8,
    name: "Men's Belt",
    price: 399,
    sold: "1.5K",
    ratings: 4.8,
    reviews: 250,
    image: image8,
    slug: "mens-belt",
    content:
      "High-quality leather belt for men, a versatile accessory for any outfit.",
  },
  {
    id: 9,
    name: "Men's Shorts",
    price: 699,
    sold: "1.1K",
    ratings: 4.7,
    reviews: 190,
    image: image9,
    slug: "mens-shorts",
    content:
      "Comfortable and stylish shorts for men, perfect for warm weather and casual wear.",
  },
];

const MenProductPage = () => {
  return <ProductPage title="Men's Fashion" products={menProducts} />;
};

export default MenProductPage;
