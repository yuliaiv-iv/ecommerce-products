import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";
import { Next } from "../Icons/Next";
import { Previous } from "../Icons/Previous";
import Button from "../Button/Button";

function Carousel({
  product,
  onProductClick,
  isOpen,
  index,
  setIndex,
  className,
}) {
  const [currentImage, setCurrentImage] = useState(product.subImages[index]);
  const mainImgRef = useRef(null);
  const subImgRef = useRef(null);

  const useInitialfocus = (ref) => {
    useEffect(() => {
      ref.current.focus();
    }, [ref]);
  };

  useInitialfocus(mainImgRef);
  useInitialfocus(subImgRef);

  function handleChangeMainImage(e) {
    const targetImage = e.target;
    product.subImages.forEach((image, i) => {
      if (targetImage.firstChild.src.endsWith(image)) {
        setCurrentImage(image);
        setIndex(i);
      }
      return;
    });
  }

  function handleProductClick() {
    onProductClick(product);
  }

  function handleImageOnPress() {
    onProductClick(product);
  }

  function handleSubImageonPress(e) {
    handleChangeMainImage(e);
  }

  function moveToNextSlide() {
    const images = product.subImages;
    if (index === images.length - 1) {
      index = 0;
    } else {
      index++;
    }
    setIndex(index);
    setCurrentImage(images[index]);
  }

  function moveToPrevSlide() {
    const images = product.subImages;
    if (index !== 0) {
      index--;
    } else {
      index = images.length - 1;
    }
    setIndex(index);
    setCurrentImage(images[index]);
  }

  return (
    <div>
      {isOpen ? (
        <>
          <Button
            type="button"
            className="btn previous"
            title="Show previous image"
            onClick={moveToPrevSlide}
          >
            <Previous />
          </Button>
          <Button
            type="button"
            className="btn next"
            title="Show next image"
            onClick={moveToNextSlide}
          >
            <Next />
          </Button>
        </>
      ) : null}
      <img
        src={currentImage}
        tabIndex="0"
        ref={mainImgRef}
        alt={product.name}
        onClick={isOpen ? null : handleProductClick}
        className={className}
        onKeyPress={isOpen ? null : handleImageOnPress}
      />
      <div className="carousel">
        {product.subImages.map((item) => (
          <div
            className={`carousel_image ${
              currentImage === item ? "active " : ""
            }`}
            key={item}
            onClick={handleChangeMainImage}
            ref={subImgRef}
            tabIndex="0"
            onKeyPress={handleSubImageonPress}
          >
            <img src={item} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
