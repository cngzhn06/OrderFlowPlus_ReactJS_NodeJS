import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // SweetAlert'ı ekledik
import "sweetalert2/dist/sweetalert2.min.css"; // SweetAlert için stil dosyasını ekledik

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.msg === "success") {
          const userData = res.data.data;
          if (userData.role === 1) {
            navigate("/orderList");
          } else if (userData.role === 0) {
            navigate("/products", {
              state: userData,
            });
          } else if (userData.role === 2) {
            navigate("/admin")
          }
        }
      })
      .catch((err) => {
        console.log(err, "yönlendirme hatası");
        // Hata durumunda SweetAlert ile bilgi verme
        Swal.fire({
          icon: "error",
          title: "Hata",
          text: "Giriş yapılırken bir hata oluştu.",
        });
      });
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              {" "}
              Şifre{" "}
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {" "}
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
