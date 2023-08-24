import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // API'den sayfa yönlendirmelerini al
    // Örnek olarak, burada bir API çağrısı yapabilirsiniz
    const fetchedRoutes = [
      { title: 'Kullanıcılar', path: '/admin/users' },
      { title: 'Siparişler', path: '/admin/orders' },
      { title: 'Ürünler', path: '/admin/products' },
    ];
    setRoutes(fetchedRoutes);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {routes.map((route, index) => (
          <div className="col-md-4" key={index}>
            <Link to={route.path} className="text-decoration-none">
              <div className={`card bg-${index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'success' : 'danger'} text-white mb-3`}>
                <div className="card-body">
                  <h5 className="card-title">{route.title}</h5>
                  <p className="card-text">{route.title} listesine göz atın.</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
