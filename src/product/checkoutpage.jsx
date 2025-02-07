import React, { useContext } from "react";
import { CartContext } from "../product/CartContext";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  const calculateGrandTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>

      {/* Cart Items Section */}
      {cart.length === 0 ? (
        <p style={styles.emptyMessage}>Your cart is empty!</p>
      ) : (
        <>
          <h2 style={styles.sectionTitle}>Your Items</h2>
          <div style={styles.cartItems}>
            {cart.map((item) => (
              <div key={`${item.category}-${item.id}`} style={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.itemImage}
                />
                <div style={styles.itemDetails}>
                  <h4 style={styles.itemName}>{item.name}</h4>
                  <p style={styles.itemCategory}>Category: {item.category}</p>
                  <p style={styles.itemQuantity}>Quantity: {item.quantity}</p>
                  <p style={styles.itemPrice}>
                    Total: Rs. {item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Grand Total */}
          <div style={styles.grandTotalContainer}>
            <h3 style={styles.grandTotalText}>
              Grand Total: Rs. {calculateGrandTotal()}
            </h3>
          </div>
        </>
      )}

      {/* User Details Form */}
      <h2 style={styles.sectionTitle}>Shipping Details</h2>
      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Address:</label>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Postal Code:</label>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number:</label>
          <input type="text" style={styles.input} />
        </div>
      </div>

      {/* Place Order Button */}
      <button onClick={handlePlaceOrder} style={styles.placeOrderButton}>
        Place Order
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "20px",
    color: "#1D63FF",
  },
  emptyMessage: {
    textAlign: "center",
    color: "#555",
    fontSize: "18px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#333",
  },
  cartItems: {
    marginBottom: "20px",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    padding: "15px",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  itemImage: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "15px",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1D63FF",
    marginBottom: "5px",
  },
  itemCategory: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "5px",
  },
  itemQuantity: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  },
  itemPrice: {
    fontSize: "16px",
    color: "#FF6F00",
    fontWeight: "bold",
  },
  grandTotalContainer: {
    textAlign: "right",
    marginTop: "20px",
    padding: "10px 0",
    borderTop: "2px solid #ddd",
  },
  grandTotalText: {
    fontSize: "20px",
    color: "#333",
    fontWeight: "bold",
  },
  form: {
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  placeOrderButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#1D63FF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default CheckoutPage;
