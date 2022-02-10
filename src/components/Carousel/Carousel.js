import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";
import { Next } from "../Icons/Next";
import { Previous } from "../Icons/Previous";
import Button from "../Button/Button";

function Carousel({
  product,
  onCardClick,
  isOpen,
  index,
  setIndex,
  className,
}) {
  const [currentImage, setCurrentImage] = useState(product.subImages[index]);
  const mainImgRef = useRef(null);
  const subImgRef = useRef(null);

  const useInitialfocus = (ref, title) => {
    useEffect(() => {
      ref.current.focus();
      document.title = title;
    }, [ref, title]);
  };

  useInitialfocus(mainImgRef, currentImage);
  useInitialfocus(subImgRef, currentImage);

  function handleShowImage(e) {
    const targetImage = e.target;
    product.subImages.forEach((image, i) => {
      if (targetImage.firstChild.src.endsWith(image)) {
        setCurrentImage(image);
        setIndex(i);
      }
      return;
    });
  }

  function handleClick() {
    onCardClick(product);
  }

  function handleImageClick() {
    onCardClick(product);
  }

  function handleSubImageClick(e) {
    handleShowImage(e)
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
          <Button type="button" className="previous" onClick={moveToPrevSlide}>
            <Previous />
          </Button>
          <Button type="button" className="next" onClick={moveToNextSlide}>
            <Next />
          </Button>
        </>
      ) : null}
      <img
        src={currentImage}
        tabIndex="0"
        ref={mainImgRef}
        alt={product.name}
        onClick={isOpen ? null : handleClick}
        className={className}
        onKeyPress={isOpen ? null : handleImageClick}
      />
      <div className="carousel">
        {product.subImages.map((item) => (
          <div
            className={`carousel__image ${
              currentImage === item ? "active" : ""
            }`}
            key={item}
            onClick={handleShowImage}
            ref={subImgRef}
            tabIndex="0"
            onKeyPress={handleSubImageClick}
          >
            <img src={item} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
