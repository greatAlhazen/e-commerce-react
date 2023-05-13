import "./product.styles.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const handleAddProduct = () => addToCart(product);

  return (
    <div className="product">
      <img src={imageUrl} className="product__image" alt={name} />
      <div className="product__details">
        <h1 className="product__title">{name}</h1>
        <Button
          type="button"
          buttonText="Add to cart"
          onClick={handleAddProduct}
        />
      </div>
      <h4 className="product__price">${price}</h4>
    </div>
  );
};

export default Product;
