import React from "react";
import "./Header.scss";
import logo from "../../images/logo.svg";
import { navigation } from "../../utils/data";
import { Cart } from "../Icons/Cart";
import Profile from "../../images/image-avatar.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Menu } from "../Icons/Menu";
import { CloseBtn } from "../Icons/CloseBtn";
import Popup from "../Popup/Popup";

function Header({ handleCartClick, cartItems, isOpen, setMenuOpen, onClose }) {
  let total = 0;
  cartItems.forEach((item) => {
    return (total += item.inCart);
  });

  const windowSize = useWindowSize();
  const resolution = windowSize <= 875;

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  function insertHtml() {
    return (
      <ul>
        {resolution ? <CloseBtn onClick={handleMenuClose} /> : null}
        {navigation.map(({ text, path }) => (
          <li key={text}>
            <a href={path}>{text}</a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <header className="header">
      {resolution ? <Menu onClick={handleMenuOpen} /> : null}
      <nav>
        <a href="/" className="header_logo">
          <img src={logo} alt="company logo" />
        </a>
        {resolution ? (
          <Popup isOpen={isOpen} onClose={onClose}>
            {insertHtml()}
          </Popup>
        ) : (
          insertHtml()
        )}
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
