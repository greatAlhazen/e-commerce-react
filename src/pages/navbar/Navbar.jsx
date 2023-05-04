import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { ReactComponent as SvgLogo } from "../../assets/shop.svg";
import { signOutUser } from "../../config/firebase/firebase.config";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOUtUserHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
              <span className="navbar__link" onClick={signOUtUserHandler}>
                Sign Out
              </span>
            ) : (
              <Link to="/form" className="navbar__link">
                Sign-in
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
