import React from "react";
import ProductModal from "./ProductModal";

const ListProductRow = ({ product }) => {
  const catText = (category) => {
    if (category === 0) {
      return "Sıcak İçecek";
    } else if (category === 1) {
      return "Soğuk İçecek";
    } else {
      return "Tanımlı Değil";
    }
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price} ₺</td>
      <td>{product.stock}</td>
      <td>{catText(product.category)}</td>
      <td><ProductModal product = {product} /></td>
    </tr>
  );
};

export default ListProductRow;
