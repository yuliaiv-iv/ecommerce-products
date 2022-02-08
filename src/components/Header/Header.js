import React from "react";
import "./Header.scss";
import logo from "../../images/logo.svg";
import { navigation } from "../../utils/data";
import { Cart } from "../Icons/Cart";
import Profile from "../../images/image-avatar.png";

function Header({ handleCartClick, cartItems }) {

let total = 0;
cartItems.forEach(item => {
  return total += item.inCart
});

  return (
    <header className="header">
      <nav>
        <img src={logo} alt="company logo" />
        <ul>
          {navigation.map(({ text, path }) => (
            <li key={text}>
              <a href={path}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__profile">
        <button onClick={handleCartClick}>
          <Cart />
          <span>{total}</span>
        </button>
        <img src={Profile} alt="user avatar" />
      </div>
    </header>
  );
}

export default Header;
