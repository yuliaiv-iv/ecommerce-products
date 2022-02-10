import React from "react";
import "./ProductList.scss";
import Product from "../Product/Product";

function ProductList({
  onCardClick,
  initialData,
  handleCardClick,
  onAdd,
  index,
  setIndex,
}) {
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
            index={index}
            setIndex={setIndex}
          />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
