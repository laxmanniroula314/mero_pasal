import React from "react";
import ProductPage from "../product/product";
import image1 from "../assets/kidcloth/i.jpg";
import image2 from "../assets/kidcloth/ii.jpg";
import image3 from "../assets/kidcloth/iii.jpg";
import image4 from "../assets/kidcloth/iv.jpg";
import image5 from "../assets/kidcloth/v.jpg";
import image6 from "../assets/kidcloth/vi.jpg";
import image7 from "../assets/kidcloth/vii.jpg";
import image8 from "../assets/kidcloth/viii.jpg";

export const kidsProducts = [
  {
    id: 1,
    name: "Kids T-shirt",
    price: 299,
    sold: "500",
    ratings: 4.8,
    reviews: 120,
    image: image1,
    slug: "kids-tshirt",
    content:
      "Comfortable and trendy t-shirt for kids, perfect for daily wear and playtime.",
  },
  {
    id: 2,
    name: "Kids Shoes",
    price: 899,
    sold: "250",
    ratings: 4.7,
    reviews: 90,
    image: image2,
    slug: "kids-shoes",
    content:
      "Durable and stylish shoes for kids, designed for active lifestyles and long-lasting comfort.",
  },
  {
    id: 3,
    name: "Kids Jacket",
    price: 1499,
    sold: "120",
    ratings: 4.9,
    reviews: 80,
    image: image3,
    slug: "kids-jacket",
    content:
      "Warm and cozy jacket for kids, perfect for chilly days and outdoor adventures.",
  },
  {
    id: 4,
    name: "Kids Jeans",
    price: 799,
    sold: "300",
    ratings: 4.6,
    reviews: 70,
    image: image4,
    slug: "kids-jeans",
    content:
      "Classic and durable jeans for kids, offering a perfect blend of style and comfort.",
  },
  {
    id: 5,
    name: "Kids Cap",
    price: 199,
    sold: "600",
    ratings: 4.5,
    reviews: 50,
    image: image5,
    slug: "kids-cap",
    content:
      "Lightweight and adjustable cap for kids, providing protection and a cool look.",
  },
  {
    id: 6,
    name: "Kids Sunglasses",
    price: 499,
    sold: "150",
    ratings: 4.7,
    reviews: 40,
    image: image6,
    slug: "kids-sunglasses",
    content:
      "Stylish sunglasses for kids with UV protection, perfect for sunny days and outdoor fun.",
  },
  {
    id: 7,
    name: "Kids Socks (Pack of 3)",
    price: 299,
    sold: "700",
    ratings: 4.6,
    reviews: 60,
    image: image7,
    slug: "kids-socks-pack",
    content:
      "Soft and comfortable socks for kids, available in a pack of 3 with vibrant colors.",
  },
  {
    id: 8,
    name: "Kids Backpack",
    price: 1199,
    sold: "180",
    ratings: 4.8,
    reviews: 110,
    image: image8,
    slug: "kids-backpack",
    content:
      "Spacious and lightweight backpack for kids, ideal for school and travel needs.",
  },
];

const KidsProductPage = () => {
  return <ProductPage title="Kids Fashion" products={kidsProducts} />;
};

export default KidsProductPage;
