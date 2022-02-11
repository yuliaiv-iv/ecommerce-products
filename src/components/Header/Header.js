import React from "react";
import "./Header.scss";
import logo from "../../images/logo.svg";
import { navigation } from "../../utils/data";
import { Cart } from "../Icons/Cart";
import Profile from "../../images/image-avatar.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Menu } from "../Icons/Menu";

function Header({ handleCartClick, cartItems }) {
  let total = 0;
  cartItems.forEach((item) => {
    return (total += item.inCart);
  });

  const windowSize = useWindowSize();
  const resolution = windowSize <= 875;

  return (
    <header className="header">
      {resolution ? <Menu /> : null}
      <nav>
        <a href="/" className="header_logo">
          <img src={logo} alt="company logo" />
        </a>
        {/* <ul>
          {navigation.map(({ text, path }) => (
            <li key={text}>
              <a href={path}>{text}</a>
            </li>
          ))}
        </ul> */}
      </nav>
      <div className="header_profile">
        <button onClick={handleCartClick} title="open cart">
          <Cart />
          {total === 0 ? null : <span className="header_total">{total}</span>}
        </button>
        <img src={Profile} alt="user avatar" />
      </div>
    </header>
  );
}

export default Header;
