import "./checkoutItem.styles.scss";
import { ReactComponent as RightIcon } from "../../assets/chevron-right.svg";
import { ReactComponent as LeftIcon } from "../../assets/chevron-left.svg";
import { ReactComponent as CloseIcon } from "../../assets/cross.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const { addToCart, removeToCart, clearToCart } = useContext(CartContext);

  const handleAddItem = () => addToCart(cartItem);
  const handleRemoveItem = () => removeToCart(cartItem);
  const handleClearItem = () => clearToCart(cartItem);

  return (
    <div className="checkout-item">
      <img src={imageUrl} alt={name} className="checkout-item__image" />
      <div className="checkout-item__item">
        <span>{name}</span>
      </div>
      <div className="checkout-item__item">
        <LeftIcon className="checkout-item__icon" onClick={handleRemoveItem} />
        <span>{quantity}</span>
        <RightIcon className="checkout-item__icon" onClick={handleAddItem} />
      </div>
      <div className="checkout-item__item">
        <span>${price}</span>
      </div>
      <div className="checkout-item__item">
        <CloseIcon className="checkout-item__icon" onClick={handleClearItem} />
      </div>
    </div>
  );
};

export default CheckoutItem;
