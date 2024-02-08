import React from "react";

const BasketProduct = ({ product }) => {
  return (
    <div>
      <img
        width="200"
        height="300"
        src={product.image}
        alt={product.name + "glasses"}
      />

      <div>
        <p>{product?.name}</p>
        <p>{product?.price}</p>
      </div>
    </div>
  );
};

export default BasketProduct;
