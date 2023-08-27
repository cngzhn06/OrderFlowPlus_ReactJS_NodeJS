import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Cart = ({ userData, cartItems, removeFromCart }) => {
  const location = useLocation();
  const userInfo = location.state && location.state.userInfo;

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    const orderDescription = cartItems
      .map((item) => `${item.name} x${item.quantity}`)
      .join(", ");

      console.log(cartItems)
    
    const category = cartItems.map((item) => {
      return {
        product_id :item.id ,
        category : item.category
      }
    })
    console.log("🚀 ~ file: Cart.jsx:31 ~ category ~ category:", category)


    const product_ids = cartItems.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
      };
    });
    
    const orderData = {
      products: product_ids,
      user_id: userData.puser_id,
      description: orderDescription,
      total_price: getTotalPrice(),
      order_date: new Date().toISOString(),
      status: 0,
    };
  
    const stockStatus = cartItems.filter(
      (item) => item.stock - item.quantity < 0
    );
  
    if (stockStatus.length > 0) {
      const notStockProductName = stockStatus
      .map((item) => item.name)
      .join(", ")
      Swal.fire({
        icon: "error",
        title: "Stokt Hatası",
        text: ` ${notStockProductName} stokta kalmamış, hayat bitti.`,
      });
  
      return;
    }
  
    Swal.fire({
      title: "Siparişi Onayla",
      text: "Siparişi onaylamak istediğinizden emin misiniz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Evet, Onayla",
      cancelButtonText: "Vazgeç",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(
            "http://localhost:3001/create-order",
            orderData
          );
          console.log("Sipariş başarıyla kaydedildi:", response.data);
  
          // Sipariş başarılıysa, stok güncellemesi yapabilirsiniz
  
          Swal.fire(
            "Başarılı!",
            "Siparişiniz başarıyla kaydedildi.",
            "success"
          );
          setTimeout(() => {
            window.location.reload();
          },3000);
        } catch (error) {
          console.error("Sipariş kaydedilirken hata oluştu:", error);
          Swal.fire("Hata!", "Sipariş kaydedilirken bir hata oluştu.", "error");
        }
      }
    });
  };
  

  return (
    <div className="col-md-3 mt-5">
      <h4 className="text-center">Sepet</h4>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {item.name} - {item.price} ₺ x {item.quantity}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeFromCart(index)}
            >
              Çıkar
            </button>
          </li>
        ))}
      </ul>
      <div className="text-center mt-3">Toplam: {getTotalPrice()} ₺</div>
      <div className="text-center mt-3">
        <button className="btn btn-success" onClick={handleCheckout}>
          Sepeti Onayla
        </button>
      </div>
    </div>
  );
};

export default Cart;
