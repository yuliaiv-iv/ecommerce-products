import React from "react";
import "./PopupWithImage.scss";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import Popup from "../Popup/Popup";
import { CloseBtn } from "../Icons/CloseBtn";

function PopupWithImage({ onClose, isOpen, product, setIndex, index }) {
  return (
    <Popup onClose={onClose} isOpen={isOpen} className="container">
      <Button type="button" className="close" onClick={onClose}>
        <CloseBtn />
      </Button>
      {isOpen && (
        <Carousel
          product={product}
          isOpen={isOpen}
          setIndex={setIndex}
          index={index}
          className="popup_image"
        ></Carousel>
      )}
    </Popup>
  );
}

export default PopupWithImage;
