import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

const OrderTableRow = ({ order, updateOrderStatus }) => {
  const [checked, setChecked] = useState(order.status === 1);


  const handleCheckboxChange = async () => {
    try {
       if (order.status === 1)  { return; } 
  
      const newStatus = checked ? 0 : 1;
  
      const confirmation = await Swal.fire({
        text: "Siparişi onaylamak istiyormusunuz??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Evet",
        cancelButtonText: "Hayır",
      });
  
      if (confirmation.isConfirmed) {
        await axios.put(`http://localhost:3001/updateOrderStatus/${order.orders_id}`, {
          status: newStatus,
        });
        updateOrderStatus(order.orders_id, newStatus);
        setChecked(newStatus === 1);
  
        if (newStatus === 1) {
          Swal.fire({
            icon: "success",
            title: "Başarılı!",
            text: "Sipariş onaylandı.",
          });
        }
      }
    } catch (error) {
      console.error("Status update error:", error);
    }
  };

  return (
    <tr>
      <td>{order.puser.name}</td>
      <td>{order.puser.lastName}</td>
      <td>{order.puser.floor}</td>
      <td>{order.description}</td>
      <td>{order.total_price}</td>
      <td>{moment(order.order_date).format("DD-MM-YYYY HH:mm:ss")}</td>
      <td>{order.status}</td>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
           disabled={order.status === 1}  // Eğer status 1 ise checkbox'i devre dışı bırak
        />
      </td>
    </tr>
  );
};

export default OrderTableRow;
