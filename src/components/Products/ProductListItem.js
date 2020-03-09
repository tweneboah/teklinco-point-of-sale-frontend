import React from "react";

const ProductListItem = (props) => {
  const { product } = props;
  return (
    <div>
      <h1>{product.name}</h1>
      <h4>Cost Price: {product.costPrice}</h4>
      <h4>Selling Price: {product.sellingPrice}</h4>
      <h4>Qty: {product.qty}</h4>
    </div>
  );
};

export default ProductListItem;
