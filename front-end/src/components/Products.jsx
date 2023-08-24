import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { state } = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        const simplifiedProducts = response.data.map((product) => ({
          id: product.product_id,
          name: product.name,
          price: product.price,
          image: product.imgdir,
          stock: product.stock,
          category: product.category,
        }));
        setProducts(simplifiedProducts);
       setFilteredProducts(simplifiedProducts)
      })
      .catch((error) => {
        console.error("Ürün çekilirken hata oldu:", error);
      });
  }, []);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    const removedItem = updatedCart.splice(index, 1)[0];
    if (removedItem.quantity > 1) {
      removedItem.quantity -= 1;
      updatedCart.push(removedItem);
    }
    setCartItems(updatedCart);
  };

  return (
    <div className="container col-md-12">
      <h2 className="text-head text-center mt-3">Ürün Listesi</h2>
      <div className="row">
        <div className="col-md-9 mt-5">
          <div className="row">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                
              />
            ))}
          </div>
        </div>
        <Cart
          userData={state}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <p className="text-muted">
            Ürün fiyatları görünmüyorsa tarayıcı penceresini kaydırarak
            görüntüleyebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
