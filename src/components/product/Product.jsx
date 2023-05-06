import "./product.styles.scss";
import Button from "../button/Button";

const Product = ({ name, imageUrl, price }) => {
  return (
    <div className="product">
      <img src={imageUrl} className="product__image" alt={name} />
      <div className="product__details">
        <h1 className="product__title">{name}</h1>
        <Button type="button" buttonText="Add to cart" />
      </div>
      <h4 className="product__price">${price}</h4>
    </div>
  );
};

export default Product;
