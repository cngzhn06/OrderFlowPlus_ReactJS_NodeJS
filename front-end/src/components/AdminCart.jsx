import React from 'react';
import { RiUserLine, RiShoppingCartLine, RiProductHuntLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../app.css';

const AdminCart = () => {

  return (
    <>
    <h2 className='text-head text-center mt-3'>Admin Kontrol</h2>
    <div className="d-flex justify-content-between">
        
      <div className="col-md-3 col-sm-6 my-2">
        <div className="text-center">
          <Link to="/admin/users" className="card product-card p-3 custom-card">
            <div className="card-body">
              <RiUserLine size={90} />
              <h5 className="card-title">Kullanıcılar</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 my-2">
        <div className="text-center">
          <Link to="/admin/orders" className="card product-card p-3 custom-card">
            <div className="card-body">
              <RiShoppingCartLine size={90} />
              <h5 className="card-title">Siparişler</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 my-2">
        <div className="text-center">
          <Link to="/admin/products" className="card product-card p-3 custom-card">
            <div className="card-body">
              <RiProductHuntLine size={90} />
              <h5 className="card-title">Ürünler</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminCart;
