import "./cartDropdown.styles.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import CartItem from "../cart-item/CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-items-box">
      <div className="cart-items-box__cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button buttonText="checkout" type="button" />
    </div>
  );
};

export default CartDropdown;
