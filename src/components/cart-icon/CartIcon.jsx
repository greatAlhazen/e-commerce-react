import "./cartIcon.styles.scss";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isOpen, setIsOpen, itemCount } = useContext(CartContext);

  const handleToggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="cart-badge">
      <ShopIcon className="cart-badge__icon" onClick={handleToggleCart} />
      <h4 className="cart-badge__badge">{itemCount}</h4>
    </div>
  );
};

export default CartIcon;
