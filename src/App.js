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
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [index, setIndex] = useState(0);

  const onAdd = (product, count) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, inCart: exist.inCart + count }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, inCart: count }]);
    }
  };

  const onRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
    setCartOpen(false);
  };

  function handleProductClick(product) {
    setImageOpen(true);
    setSelectedCard(product);
    setIndex(0);
  }

  function handleCartClick() {
    setCartOpen(true);
  }

  function closeAllPopups() {
    setImageOpen(false);
    setCartOpen(false);
  }

  return (
    <div className="App">
      <Header 
        handleCartClick={handleCartClick}
        cartItems={cartItems} 
      />
      <ProductList
        initialData={initialData}
        onAdd={onAdd}
        onProductClick={handleProductClick}
        index={index}
        setIndex={setIndex}
      />
      <PopupWithImage
        isOpen={imageOpen}
        product={selectedCard}
        onClose={closeAllPopups}
        setIndex={setIndex}
        index={index}
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
