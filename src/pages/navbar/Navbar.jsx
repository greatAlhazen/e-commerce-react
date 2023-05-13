import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { ReactComponent as SvgLogo } from "../../assets/shop.svg";
import { signOutUser } from "../../config/firebase/firebase.config";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { CartContext } from "../../contexts/cart.context";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <SvgLogo className="navbar__logo" />
        </Link>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/shop" className="navbar__link">
              Shop
            </Link>
          </li>
          <li className="navbar__item">
            {currentUser ? (
              <span className="navbar__link" onClick={signOutUser}>
                Sign Out
              </span>
            ) : (
              <Link to="/form" className="navbar__link">
                Sign-in
              </Link>
            )}
          </li>
          <CartIcon />
        </ul>
        {isOpen && <CartDropdown />}
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
