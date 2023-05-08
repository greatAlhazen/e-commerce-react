import { createContext, useState } from "react";

export const CartToggleContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const CartToggleProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };

  return (
    <CartToggleContext.Provider value={value}>
      {children}
    </CartToggleContext.Provider>
  );
};
