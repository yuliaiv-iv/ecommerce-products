import React, { useState } from "react";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import { Cart } from "../Icons/Cart";
import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";

function Product(props) {
  const {
    product,
    onAdd,
    handleCardClick,
    // index,
    currentImage,
    onCardClick
    // handleShowImage
  } = props;

  const [count, setCount] = useState(0);

  // let [index, setIndex] = useState(0);
  // const [currentImage, setCurrentImage] = useState(product.subImages[index]);

  const discount = 50;
  const finalPrice = (product.price * discount) / 100;

  function handleAddCount() {
    setCount(count + 1);
  }

  function handleRemoveCount() {
    if (count === 0) return;
    else {
      setCount(count - 1);
    }
  }

  function handleClick() {
    onCardClick(product);
  }

  // function handleClick() {
  //   handleCardClick(currentImage, product.subImages);
  // }

  function handleAddToCart() {
    if (count === 0) return;
    else {
      onAdd(product, count);
      setCount(0);
    }
  }

  return (
    <li>
      <Carousel
        // handleCardClick={handleCardClick}
        // index={index}
        // subImages={product.subImages}
        // className="carousel"
        // handleShowImage={handleShowImage}
        // currentImage={currentImage}
        product={product}
        // handleCardClick={handleCardClick}
      >
        <img src={product.subImages[0]} alt={product.name} onClick={handleClick} />
      </Carousel>
      <div>
        <h4>{product.supplier}</h4>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="price">
          <h2>{`$${finalPrice.toFixed(2)}`}</h2>
          <h3>{`${discount}%`}</h3>
        </div>
        <h3 className="price__origin">{`$${product.price.toFixed(2)}`}</h3>
        <div className="action">
          <div className="counter">
            <Button type="button" onClick={handleRemoveCount}>
              <Minus />
            </Button>
            <p>{count}</p>
            <Button type="button" onClick={handleAddCount}>
              <Plus />
            </Button>
          </div>
          <Button
            onClick={handleAddToCart}
            type="button"
            className="cart"
            content="Add to cart"
          >
            <Cart />
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Product;
