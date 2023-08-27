import React, { useEffect, useState } from "react";
import axios from "axios";
import ListUserRow from "./ListUserRow";
import { useParams } from "react-router-dom";
import UserModalAdd from "./UserModalAdd";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((res) => {
        const usersData = res.data;
        setUsers(usersData);
        console.log(
          "🚀 ~ file: ListUser.jsx:13 ~ .then ~ usersData:",
          usersData
        );
      })
      .catch((err) => {
        console.error("Kullanıcı çekme hatalı", err);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-head text-center mt-1 p-5">KULLANICILAR</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Adı</th>
            <th scope="col">Soyadı</th>
            <th scope="col">Oda Numarası</th>
            <th scope="col">Kullanıcı Adı</th>
            <th scope="col">Rol</th>
            <th scope="col">Güncelle</th>
          </tr>
        </thead>
        
        <tbody>
          {users.map((user, i) => (
            <ListUserRow key={i} user={user} />
          ))}
        </tbody>
      </table>
      <UserModalAdd/>
    </div>
  );
};

export default ListUser;
