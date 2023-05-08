import "./cartIcon.styles.scss";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { CartToggleContext } from "../../contexts/cartToggle.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartToggleContext);

  const handleToggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="cart-badge">
      <ShopIcon className="cart-badge__icon" onClick={handleToggleCart} />
      <h4 className="cart-badge__badge">0</h4>
    </div>
  );
};

export default CartIcon;
