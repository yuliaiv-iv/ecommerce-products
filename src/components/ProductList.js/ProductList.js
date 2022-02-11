import React from "react";
import "./ProductList.scss";
import Product from "../Product/Product";

function ProductList({
  onProductClick,
  initialData,
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
            onAdd={onAdd}
            product={product}
            onProductClick={onProductClick}
            index={index}
            setIndex={setIndex}
          />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
