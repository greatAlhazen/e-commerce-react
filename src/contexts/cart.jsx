import { createContext, useEffect, useState } from "react";

const addItems = (cartItems, product) => {
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

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  itemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const newItemCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setItemCount(newItemCount);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(addItems(cartItems, product));
  };

  const value = { isOpen, setIsOpen, cartItems, addToCart, itemCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
