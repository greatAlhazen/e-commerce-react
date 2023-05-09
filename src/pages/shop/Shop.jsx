import "./shop.styles.scss";
import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import Product from "../../components/product/Product";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
