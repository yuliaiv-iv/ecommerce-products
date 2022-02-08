import React from "react";
import "./ProductList.scss";
import Product from "../Product/Product";

function ProductList({ onCardClick, initialData, handleCardClick, onAdd, currentImage, handleShowImage }) {
  return (
    <main>
      <ul>
        {initialData.map((product) => (
          <Product
            key={product.id}
            handleCardClick={handleCardClick}
            onAdd={onAdd}
            product={product}
            onCardClick={onCardClick}
            // currentImage={currentImage}
            // index={index}
            // currentImage={currentImage}
            // handleShowImage={handleShowImage}
          />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
