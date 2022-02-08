import React from "react";
import "./PopupWithCart.scss";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import { Remove } from "../Icons/Remove";

function PopupWithCart({
  onClose,
  isOpen,
  cartItems,
  onRemove,
  handleCheckout,
}) {
  const discount = 50;

  const handleRemoveFromCart = () => {
    onRemove(cartItems);
  }

  const priceAfterDiscount = (price) => {
    return ((price * discount) / 100).toFixed(2)
  }

  return (
    <Popup onClose={onClose} isOpen={isOpen} className="cart_container">
      <h3>Cart</h3>
      <div>
        {cartItems.map(({ subImages, name, price, inCart }) => (
          <div className="cart_item">
            <img src={subImages[0]} alt={name} />
            <div>
              <p>{name}</p>
              <p>
                {`$${priceAfterDiscount(price)} x ${inCart}`}
                <span>
                  {" "}
                  {`$${priceAfterDiscount(price) * inCart}`}
                </span>
              </p>
            </div>
            <button onClick={handleRemoveFromCart}>
              <Remove />
            </button>
          </div>
        ))}
        <Button
          onClick={handleCheckout}
          type="button"
          className="cart-btn"
          content="Checkout"
        />
      </div>
    </Popup>
  );
}

export default PopupWithCart;
