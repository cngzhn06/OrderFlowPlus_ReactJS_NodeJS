import React, { useState } from "react";
import Button from "./Button";

const ProductCard = ({ product, addToCart }) => {
  const [count, setCount] = useState(0);

  const addToCartClicked = () => {
    if (count > 0) {
      addToCart({
        ...product,
        quantity: count,
      });
    }
  };

  return (
    <div className="col-md-3 col-sm-6 my-2">
      <div className="text-center">
        <div className="card product-card">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price} TL</p>
            <p className="card-text">{product.category}</p>
          </div>
          <div className="card-footer p-1">
            <div className="row p-1">
              <div className="col-6 ">
                <Button
                  name={"-"}
                  onClick={() => setCount(Math.max(count - 1, 0))}
                  disabled={count === 0}
                  className="btn btn-outline-danger"
                />
                {count}
                <Button
                  name={"+"}
                  onClick={() => setCount(count + 1)}
                  className="btn btn-outline-success"
                />
              </div>
              <div className="col-6">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={addToCartClicked}
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
