import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import ProductList from "./pages/OrderList";
import Products from "./pages/ProductsPage";
import Admin from "./pages/Admin";
import ListUser from "./components/ListUser";
import ListProduct from "./components/ListProduct";

import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Login/> */}
      <div className="imgsty">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orderList" element={<ProductList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<ListUser />} />
            <Route path="/admin/products" element={<ListProduct />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
