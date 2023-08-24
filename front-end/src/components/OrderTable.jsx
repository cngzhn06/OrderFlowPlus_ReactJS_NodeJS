import React from 'react';
import OrderTableRow from './OrderTableRow';

const OrderTable = ({ orders , updateOrderStatus  }) => {
  return (
    <><h2 className='text-head text-center mt-3'>Sipariş Listesi</h2>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Adı</th>
          <th scope='col'>Soyadı</th>
          <th scope='col'>Oda Numarası</th>
          <th scope='col'>Sipariş Edilen Ürün</th>
          <th scope='col'>Toplam Fiyat</th>
          <th scope='col'>Sipariş Verilme Tarihi</th>
          <th scope='col'>Durum</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <OrderTableRow key={index} order={order} updateOrderStatus= {updateOrderStatus} />
        ))}
      </tbody>
    </table>
    </>
  );
};

export default OrderTable;
