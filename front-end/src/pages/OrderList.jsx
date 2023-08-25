import React, { useState, useEffect } from "react";
import OrderTable from "../components/OrderTable";
import axios from "axios";
import Footer from "../components/Footer";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersEndpoint = "http://localhost:3001/orderlist";
    axios
      .get(ordersEndpoint)
      .then((response) => {
        const ordersData = response.data;
        setOrders(ordersData);
        console.log("🚀 ~ file: OrderList.jsx:16 ~ .then ~ ordersData:", ordersData)
        
      })
      .catch((error) => {
        console.error("ORDER YÖNLENDİRME HATASI:", error);
      });
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.orders_id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  

  return (
    <div className="container">
      <OrderTable orders={orders} updateOrderStatus={updateOrderStatus} />
      <Footer/>
    </div>
  );
};

export default OrderList;
