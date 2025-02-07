import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartPopout = ({ onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    onClose(); // Close the cart pop-out
    navigate("/CheckoutPage"); // Navigate to the checkout page
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "60px",
        right: "20px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #FFCE32",
        borderRadius: "8px",
        padding: "10px",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <h3>Your Cart</h3>
        <button
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            color: "#FF0000",
          }}
          onClick={onClose}
        >
          ✖
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={`${item.id}-${item.category}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#1D63FF",
                }}
              >
                {item.name}
              </span>
            </div>
            <span>Qty: {item.quantity}</span>
            <button
              style={{
                backgroundColor: "#FFCE32",
                color: "#1D63FF",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "5px 10px",
                fontSize: "12px",
              }}
              onClick={() => removeFromCart(item.id, item.category)} // Pass id and category
            >
              Remove
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            backgroundColor: "#1D63FF",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartPopout;
