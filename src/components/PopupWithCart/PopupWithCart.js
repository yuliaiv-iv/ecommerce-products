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

  function handleRemoveFromCart(id) {
    onRemove(id);
  };

  function priceAfterDiscount (price) {
    return ((price * discount) / 100).toFixed(2);
  };

  return (
    <Popup onClose={onClose} isOpen={isOpen} className="cart">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p className="cart_empty">Your cart is empty.</p>
      ) : (
        <div className="cart_body">
          {cartItems.map(({ subImages, name, price, inCart, id }) => (
            <div key={id} className="cart_item">
              <img src={subImages[0]} alt={name} />
              <div>
                <p>{name}</p>
                <p>
                  {`$${priceAfterDiscount(price)} x ${inCart}`}
                  <span>{`$${priceAfterDiscount(price) * inCart}`}</span>
                </p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(id)}
                title="remove item"
              >
                <Remove />
              </button>
            </div>
          ))}
          <Button
            onClick={handleCheckout}
            type="button"
            className="cart_btn"
            content="Checkout"
          />
        </div>
      )}
    </Popup>
  );
}

export default PopupWithCart;
