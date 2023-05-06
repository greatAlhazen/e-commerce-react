import "./shop.styles.scss";
import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import Product from "../../components/product/Product";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products">
      {products.map(({ id, name, imageUrl, price }) => {
        return (
          <Product name={name} key={id} price={price} imageUrl={imageUrl} />
        );
      })}
    </div>
  );
};

export default Shop;
