import { createContext, useEffect, useState } from "react";
/* import SHOP_DATA from "../data";
import { createCollectionsAndDocuments } from "../config/firebase/firebase.config.js"; */

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  /*  useEffect(() => {
    createCollectionsAndDocuments("categories", SHOP_DATA);
  }, []); */
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
