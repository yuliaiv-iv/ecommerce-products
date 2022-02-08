import React, { useState } from "react";
import Header from "./components/Header/Header";
import PopupWithCart from "./components/PopupWithCart/PopupWithCart";
import PopupWithImage from "./components/PopupWithImage/PopupWithImage";
import ProductList from "./components/ProductList.js/ProductList";
import "./styles/global.scss";
import { initialData } from "./utils/data";

function App() {
  const [imageOpen, setImageOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const [subImages, setSubImages] = useState([]);
  // let [index, setIndex] = useState(0);
  // const [currentImage, setCurrentImage] = useState(subImages[index]);
  const [selectedCard, setSelectedCard] = useState(undefined);
  // const [products, setProducts] = useState(initialData)

  // console.log(initialData)
  // let [index, setIndex] = useState(0);
  // const [currentImage, setCurrentImage] = useState(initialData.subImages[index]);

  // function handleShowImage(e) {
  //   const targetImage = e.target;
  //   subImages.forEach((image) => {
  //     if (targetImage.src.endsWith(image)) {
  //       setCurrentImage(image);
  //     }
  //     return;
  //   });
  // }

  const onAdd = (product, count) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, inCart: exist.inCart + count } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, inCart: count }]);
    }
  };

  const onRemove = (products) => {
    // eslint-disable-next-line array-callback-return
    products.map((p) => {
      setCartItems(products.filter((x) => x.id !== p.id));
    });
  };

  const handleCheckout = () => {
    setCartItems([]);
    setCartOpen(false);
  };

  function handleCardClick(product) {
    setImageOpen(true);
    setSelectedCard(product);
    // setCurrentImage(subImages[index]);
    // setSubImages(images);
  }

  function handleCartClick() {
    setCartOpen(true);
  }

  function closeAllPopups() {
    setImageOpen(false);
    setCartOpen(false);
    setSelectedCard();
    // setIndex(0)
  }

  console.log(selectedCard)
  return (
    <div className="App">
      <Header handleCartClick={handleCartClick} cartItems={cartItems} />
      <ProductList
        initialData={initialData}
        // onCardClick={handleCardClick}
        onAdd={onAdd}
        onCardClick={handleCardClick}
      />
      <PopupWithImage
        isOpen={imageOpen}
        // subImages={subImages}
        product={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithCart
        cartItems={cartItems}
        onRemove={onRemove}
        isOpen={cartOpen}
        handleCheckout={handleCheckout}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
