import "./shop.styles.scss";
import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import Product from "../../components/product/Product";
import Preview from "../../components/preview/Preview";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return <Preview key={title} title={title} products={products} />;
      })}
    </div>
  );
};

export default Shop;
