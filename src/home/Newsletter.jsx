import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    marginTop: "20px",
  };

  const inputStyle = {
    padding: "10px",
    width: "300px",
    marginRight: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#1D63FF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2>Subscribe to Our Newsletter</h2>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleSubscribe} style={buttonStyle}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
