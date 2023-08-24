import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import ProductList from './pages/OrderList'
import Products from './pages/ProductsPage'
import Admin from './pages/Admin';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <>
    {/* <Login/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/orderList" element={<ProductList/>}/>
          <Route path="/Admin" element={<Admin/>}/>
        </Routes>
    </Router>
    </> 
  )
}

export default App

