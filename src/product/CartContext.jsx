import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id && item.category === product.category
      );
      if (existingProduct) {
        // Increment quantity if the product exists
        return prevCart.map((item) =>
          item.id === product.id && item.category === product.category
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add a new product to the cart
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId, category) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && item.category === category)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
