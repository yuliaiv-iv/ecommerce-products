import React, { useState } from "react";
import Header from "./components/Header/Header";
import PopupWithCart from "./components/PopupWithCart/PopupWithCart";
import PopupWithImage from "./components/PopupWithImage/PopupWithImage";
import ProductList from "./components/ProductList.js/ProductList";
import { initialData } from "./utils/data";
import "./styles/global.scss";

function App() {
  const [imageOpen, setImageOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [index, setIndex] = useState(0);

  function onAdd(product, count) {
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

  function onRemove(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  function handleCheckout() {
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
    setMenuOpen(false);
  }

  return (
    <div className="App">
      <Header
        handleCartClick={handleCartClick}
        cartItems={cartItems}
        isOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onClose={closeAllPopups}
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
