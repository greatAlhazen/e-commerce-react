import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";

import { ReactComponent as SvgLogo } from "../../assets/shop.svg";

const Navbar = () => {
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
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
