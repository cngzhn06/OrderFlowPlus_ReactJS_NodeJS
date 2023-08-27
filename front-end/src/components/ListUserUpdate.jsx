import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";


const ListUserUpdate = ( {user , handleClose} ) => {

console.log("🚀 ~ file: ListUserUpdate.jsx:8 ~ ListUserUpdate ~ user:", user)

const [name ,setName] = useState(user.name)
const [lastName ,setLastName] = useState(user.lastName)
const [floor ,setFloor] = useState(user.floor)
const [role ,setRole] = useState(user.role)

const handleUpdate = async () => {
    try{
        const updateUserData = {
            name : name,
            lastName : lastName,
            floor : floor,
            role : role,
        }
        await axios.put(`http://localhost:3001/updateUserData/${user.puser_id}`, updateUserData);
        console.log('güncellendi')
        Swal.fire({
            icon: "success",
            title: "Başarılı!",
            text: "Veriler başarıyla güncellendi.",
          }).then(() => {
            setTimeout(() => {
              window.location.reload(); // 3 saniye sonra sayfayı yenile
            }, 1000);
      });}
    catch(err){
        console.error(err, "    s:HATAAAA")
    }
}


  return (
    <>
      <FloatingLabel label="İsim" className="mb-3" controlId="floatingInput" >
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>

    </FloatingLabel>



      <FloatingLabel label="Soyisim" className="mb-3" controlId="floatingInput">

      <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

     </FloatingLabel>



      <FloatingLabel label="Oda Numarası" className="mb-3" controlId="floatingInput" >

        <Form.Control type="text" value={floor} onChange={(e) => setFloor(e.target.value)}/>

      </FloatingLabel>



      <FloatingLabel label="Rol (0-1-2 olarak giriniz)" className="mb-3" controlId="floatingInput">
        
      <Form.Control type="text" value={role} onChange={(e) => setRole(e.target.value)}/>
      
      </FloatingLabel>

    <button className="btn btn-sm m-2 btn-primary" onClick={handleUpdate}> Kaydet</button>
    <button className="btn btn-sm m-2 btn-primary" onClick={handleClose}> Kapat</button>
    
    </>
  );
};

export default ListUserUpdate;
