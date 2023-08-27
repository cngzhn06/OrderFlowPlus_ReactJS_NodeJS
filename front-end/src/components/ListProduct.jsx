import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProductRow from "./ListProductRow";

const ListProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        const productData = res.data;
        setProduct(productData);
        console.log("🚀 ~ file: ListProduct.jsx:13 ~ .then ~ productData:", productData)
      })
      .catch((err) => {
        console.error("ürün getirilemedi:  ", err);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-head text-center mt-1 p-5">ÜRÜNLER</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Ürün Adı</th>
            <th scope="col">Fiyatı</th>
            <th scope="col">Stoğu</th>
            <th scope="col">Kategorisi</th>
            <th scope="col">Güncelle</th>
          </tr>
        </thead>
        <tbody>
            {product.map((product,index) => (
                    <ListProductRow key={index} product={product}/>
                ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
