import React from "react";
import ProductPage from "../product/product";
import image1 from "../assets/womencloth/a.jpg";
import image2 from "../assets/womencloth/b.jpg";
import image3 from "../assets/womencloth/c.jpg";
import image4 from "../assets/womencloth/d.jpg";
import image5 from "../assets/womencloth/e.jpg";
import image6 from "../assets/womencloth/f.jpg";
import image7 from "../assets/womencloth/g.jpg";
import image8 from "../assets/womencloth/h.jpg";
export const womenProducts = [
  {
    id: 1,
    name: "Women's Dress",
    price: 999,
    sold: "2.3K",
    ratings: 4.9,
    reviews: 500,
    image: image1,
    slug: "womens-dress",
    content:
      "Elegant and stylish dress for women, perfect for all occasions. High-quality fabric ensures comfort and durability.",
  },
  {
    id: 2,
    name: "Women's Sandals",
    price: 699,
    sold: "1.1K",
    ratings: 4.5,
    reviews: 300,
    image: image2,
    slug: "womens-sandals",
    content:
      "Comfortable and fashionable sandals designed to provide all-day support and style.",
  },
  {
    id: 3,
    name: "Women's Handbag",
    price: 1499,
    sold: "800",
    ratings: 4.8,
    reviews: 400,
    image: image3,
    slug: "womens-handbag",
    content:
      "Stylish handbag with spacious compartments, perfect for work or casual outings.",
  },
  {
    id: 4,
    name: "Women's Earrings",
    price: 399,
    sold: "2K",
    ratings: 4.7,
    reviews: 600,
    image: image4,
    slug: "womens-earrings",
    content:
      "Beautiful and lightweight earrings, perfect to add a touch of elegance to any outfit.",
  },
  {
    id: 5,
    name: "Women's Scarf",
    price: 299,
    sold: "1.5K",
    ratings: 4.6,
    reviews: 350,
    image: image5,
    slug: "womens-scarf",
    content:
      "Soft and lightweight scarf, ideal for all seasons and versatile styling.",
  },
  {
    id: 6,
    name: "Women's Sunglasses",
    price: 799,
    sold: "1.2K",
    ratings: 4.7,
    reviews: 400,
    image: image6,
    slug: "womens-sunglasses",
    content:
      "Trendy sunglasses with UV protection, a must-have accessory for sunny days.",
  },
  {
    id: 7,
    name: "Women's Sneakers",
    price: 1299,
    sold: "900",
    ratings: 4.8,
    reviews: 450,
    image: image7,
    slug: "womens-sneakers",
    content:
      "Comfortable and durable sneakers, perfect for casual wear and outdoor activities.",
  },
  {
    id: 8,
    name: "Women's Jacket",
    price: 1999,
    sold: "600",
    ratings: 4.9,
    reviews: 500,
    image: image8,
    slug: "womens-jacket",
    content:
      "Stylish and warm jacket for women, designed to keep you comfortable and chic during colder days.",
  },
];

const WomenProductPage = () => {
  return <ProductPage title="Women's Fashion" products={womenProducts} />;
};

export default WomenProductPage;
