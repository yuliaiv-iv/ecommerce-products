import React, { useState } from "react";
import { Children } from "react";
import "./Carousel.scss";

function Carousel({
  children,
  handleCardClick,
  product,
  currentImage
  // handleShowImage,
  // index,
  // isOpen
}) {

  // let [index, setIndex] = useState(0);
  // const [currentImage, setCurrentImage] = useState(product.subImages[index]);

  // function handleShowImage(e) {
  //   const targetImage = e.target;
  //   subImages.forEach((image) => {
  //     if (targetImage.src.endsWith(image)) {
  //       setCurrent(image);
  //     }
  //     return;
  //   });
  // }

  // function handleClick() {
  //   handleCardClick(currentImage, subImages);
  // }


  return (
    <div>
      {children}
      {/* <img src={currentImage} alt={product.name} /> */}
      <div className="carousel">
        {/* {product.subImages.map((item) => (
          <img
            // onClick={handleShowImage}
            key={item}
            src={item}
            alt={product.name}
            className="carousel__image"
          />
        ))} */}
      </div>
    </div>
  );
}

export default Carousel;
