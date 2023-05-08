import "./cartDropdown.styles.scss";
import Button from "../button/Button";

const CartDropdown = () => {
  return (
    <div className="cart-items-box">
      <div className="cart-items-box__cart-items"></div>
      <Button buttonText="checkout" type="button" />
    </div>
  );
};

export default CartDropdown;
