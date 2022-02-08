import React from "react";
import "./PopupWithImage.scss";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import Popup from "../Popup/Popup";
import { CloseBtn } from "../Icons/CloseBtn";
import { Next } from "../Icons/Next";
import { Previous } from "../Icons/Previous";
import { useState } from "react/cjs/react.development";

function PopupWithImage({
  onClose,
  isOpen,
  subImages,
  handleCardClick,
  currentImage,
  // handleNextClick,
  index,
  setIndex,
  product
}) {
  // let [index, setIndex] = useState(0);

  const handleNextClick = () => {
    let nextIndex = ++index;
    setIndex(nextIndex);
    // console.log(nextIndex)
  };
  // let slidePosition = 0;

  // const totalSlides = subImages.length;

  // function moveToNextSlide() {
  //   if (slidePosition === totalSlides - 1) {
  //     slidePosition = 0;
  //   } else {
  //     slidePosition++;
  //   }
  //   console.log(slidePosition)
  // }

  // const [current, setCurrent] = useState(subImages[index]);

  // function handleShowImage(e) {
  //   const targetImage = e.target;
  //   subImages.forEach((image) => {
  //     if (targetImage.src.endsWith(image)) {
  //       setCurrent(image);
  //     }
  //     return;
  //   });
  // }
  console.log(product)

  return (
    <Popup onClose={onClose} isOpen={isOpen} className="container">
      <Button type="button" className="close" onClick={onClose}>
        <CloseBtn />
      </Button>
      {isOpen && (
        <Carousel
          // subImages={subImages}
          // currentImage={currentImage}
          // index={index}
          // handleShowImage={handleShowImage}
        >
          {/* <img src={currentImage} alt="something" /> */}
          <Button type="button" className="previous">
            <Previous />
          </Button>
          <Button type="button" className="next" onClick={handleNextClick}>
            <Next />
          </Button>
        </Carousel>
      )}
    </Popup>
  );
}

export default PopupWithImage;
