import React from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import image1 from "../assets/profile.jpg";

const ProfilePage = () => {
  const user = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    phone: "+1234567890",
    address: "456 Elm Street, Metropolis, USA",
    profileImage: image1,
    orders: [
      {
        id: 1,
        product: "Women's Dress",
        date: "2025-01-01",
        price: "999",
        status: "Delivered",
      },
      {
        id: 2,
        product: "Men's T-shirt",
        date: "2025-01-05",
        price: "499",
        status: "Shipped",
      },
      {
        id: 3,
        product: "Kids Shoes",
        date: "2025-01-10",
        price: "699",
        status: "Pending",
      },
    ],
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-image-container">
          <img
            src={user.profileImage}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="profile-details">
        <h2>Contact Information</h2>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>

      {/* Order History */}
      <div className="profile-orders">
        <h2>Order History</h2>
        {user.orders.length > 0 ? (
          <div className="responsive-table">
            <table className="order-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {user.orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.date}</td>
                    <td>Rs. {order.price}</td>
                    <td className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No orders found.</p>
        )}
      </div>

      {/* Cart Button */}
      <div className="cart-button-container">
        <Link to="/CheckoutPage" className="cart-button">
          🛒 Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
