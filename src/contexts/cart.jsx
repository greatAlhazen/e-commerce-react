import { createContext, useEffect, useState } from "react";

const addItem = (cartItems, product) => {
  const isCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (isCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeItem = (cartItems, product) => {
  const isCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (isCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItem = (cartItems, product) =>
  cartItems.filter((cartItem) => cartItem.id !== product.id);

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  removeToCart: () => {},
  clearToCart: () => {},
  itemCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newItemCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setItemCount(newItemCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(addItem(cartItems, product));
  };

  const removeToCart = (product) => {
    setCartItems(removeItem(cartItems, product));
  };

  const clearToCart = (product) => {
    setCartItems(clearItem(cartItems, product));
  };

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addToCart,
    itemCount,
    removeToCart,
    clearToCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
