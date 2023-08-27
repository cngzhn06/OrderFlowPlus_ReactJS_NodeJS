import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
axios

const ListUserAdd = ({ handleClose }) => {



    const [userAdd,setUserAdd] =useState( {
        username: "",
        password: "",
        name: "",
        lastName: "",
        floor: "",
        role: "",
    })

    

    const createUser = async (e) => {
        e.preventDefault()
        console.log("metyho ")

        try{
            await axios.post("http://localhost:3001/create-user", userAdd) .then((window.location.reload()))
        }
        catch(error){
            console.error("Oluşmadı knak:  ",error)
        }
    }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Kullanıcı Adı</Form.Label>
          <Form.Control
            type="text"
            placeholder="Oluşturmak İstediğiniz Kullanıcı Adınız"
            value={userAdd.username}
            onChange={(e) => setUserAdd({...userAdd, username:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Şifreniz</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Şifrenizi Giriniz"
          value={userAdd.password}
          onChange={(e) => setUserAdd({...userAdd, password:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Adınız</Form.Label>
          <Form.Control
            type="text"
            placeholder="Garsonsanız boş bırakabilirsiniz"
            value={userAdd.name}
            onChange={(e) => setUserAdd({...userAdd, name:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Soyadınız</Form.Label>
          <Form.Control
            type="text"
            placeholder="Garsonsanız boş bırakabilirsiniz"
            value={userAdd.lastName}
            onChange={(e) => setUserAdd({...userAdd, lastName:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Oda Numaranız</Form.Label>
          <Form.Control
            type="text"
            placeholder="Garsonsanız boş bırakabilirsiniz"
            value={userAdd.floor}
            onChange={(e) => setUserAdd({...userAdd, floor:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rol</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="0=Personel 1=Garson 2=Admin"
          value={userAdd.role}
          onChange={(e) => setUserAdd({...userAdd, role:e.target.value})} />
          
        </Form.Group>
        <button className="btn btn-sm m-2 btn-primary" onClick={(e) => createUser(e)} >
          Oluştur
        </button>
        <button className="btn btn-sm m-2 btn-primary" onClick={handleClose}>
          Kapat
        </button>
      </Form>
    </div>
  );
};

export default ListUserAdd;
