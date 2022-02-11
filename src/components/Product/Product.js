import React, { useState } from "react";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import { Cart } from "../Icons/Cart";
import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";

function Product({ index, product, onAdd, onProductClick, setIndex }) {
  const [count, setCount] = useState(0);

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
        product={product}
        onProductClick={onProductClick}
        index={index}
        setIndex={setIndex}
      ></Carousel>
      <div>
        <h4>{product.supplier}</h4>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="price">
          <h2>{`$${finalPrice.toFixed(2)}`}</h2>
          <h3>{`${discount}%`}</h3>
        </div>
        <h3 className="price_origin">{`$${product.price.toFixed(2)}`}</h3>
        <div className="action">
          <div className="counter">
            <Button
              className="counter_btn"
              type="button"
              onClick={handleRemoveCount}
              title="decrement item"
            >
              <Minus />
            </Button>
            <h3>{count}</h3>
            <Button
              className="counter_btn"
              type="button"
              onClick={handleAddCount}
              title="increment item"
            >
              <Plus />
            </Button>
          </div>
          <Button
            onClick={handleAddToCart}
            type="button"
            className="add_btn"
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
