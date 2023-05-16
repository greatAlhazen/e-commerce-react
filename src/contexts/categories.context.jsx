import { createContext, useEffect, useState } from "react";
import { getDocumentAndCollections } from "../config/firebase/firebase.config";
/* import SHOP_DATA from "../data";
import { createCollectionsAndDocuments } from "../config/firebase/firebase.config.js"; */

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCatgeories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getDocumentAndCollections();
      setCatgeories(categories);
    };

    getCategories();
  }, []);

  /*  useEffect(() => {
    createCollectionsAndDocuments("categories", SHOP_DATA);
  }, []); */
  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
