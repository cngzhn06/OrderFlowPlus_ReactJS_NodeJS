import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const ListProductAdd = ({handleClose}) => {

    const [productAdd , setProductAdd] = useState({
        name : "",
        price : "",
        stock : "",
        category : "",
        imgdir : "",
    })


const createProduct = async (e) => {
    e.preventDefault()
    
    try{
        await axios.post("http://localhost:3001/create-product" , productAdd)
        .then((window.location.reload()))
    }
    catch(error){
        console.error('ürün olsmadı   ', error)
    }
}

return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ürünün adı</Form.Label>
          <Form.Control
            type="text"
            placeholder="ÜRÜN ADI"
            value={productAdd.name}
            onChange={(e) => setProductAdd({...productAdd, name:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fiyatı</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="FİYATI"
          value={productAdd.price}
          onChange={(e) => setProductAdd({...productAdd, price:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Stoğu</Form.Label>
          <Form.Control
            type="text"
            placeholder="STOK"
            value={productAdd.stock}
            onChange={(e) => setProductAdd({...productAdd, stock:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Kategorisi</Form.Label>
          <Form.Control
            type="text"
            placeholder="0-SICAK && 1-SOĞUK"
            value={productAdd.category}
            onChange={(e) => setProductAdd({...productAdd, category:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Resim Yolu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Örnek : 'img/TurkKahvesi.jpg'"
            value={productAdd.imgdir}
            onChange={(e) => setProductAdd({...productAdd, imgdir:e.target.value})}
          />
        </Form.Group>

        <button className="btn btn-sm m-2 btn-primary" onClick={(e) => createProduct(e)} >
          Oluştur
        </button>
        <button className="btn btn-sm m-2 btn-primary" onClick={handleClose}>
          Kapat
        </button>
      </Form>
    </div>
  );
};

export default ListProductAdd;

