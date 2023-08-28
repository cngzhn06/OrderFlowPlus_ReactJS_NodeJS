import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";


const ListProductUpdate = ( {product , handleClose} ) => {


const [name ,setName] = useState(product.name)
const [price ,setPrice] = useState(product.price)
const [stock ,setStock] = useState(product.stock)
const [category , setCategory] = useState(product.category)
const [imgdir , setImgdir] = useState(product.imgdir)

const handleUpdate = async () => {
    try{
        const updateProductData = {
            name : name,
            price : price,
            stock : stock,
            category : category,
            imgdir : imgdir,
        }
        await axios.put(`http://localhost:3001/productUpdate/${product.product_id}`, updateProductData);
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
      <FloatingLabel label="Adı" className="mb-3" controlId="floatingInput" >
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>

    </FloatingLabel>



      <FloatingLabel label="Fiyatı" className="mb-3" controlId="floatingInput">

      <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>

     </FloatingLabel>



      <FloatingLabel label="Stok" className="mb-3" controlId="floatingInput" >

        <Form.Control type="text" value={stock} onChange={(e) => setStock(e.target.value)}/>

      </FloatingLabel>



      <FloatingLabel label="Kategori (0-1-2 olarak giriniz)" className="mb-3" controlId="floatingInput">
        
      <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
      
      </FloatingLabel>



      <FloatingLabel label="Resmin yolunu girin" className="mb-3" controlId="floatingInput">
        
      <Form.Control type="text" value={imgdir} onChange={(e) => setImgdir(e.target.value)}/>
      
      </FloatingLabel>

    <button className="btn btn-dark m-2 btn-primary" onClick={handleUpdate}> Kaydet</button>
    <button className="btn btn-dark m-2 btn-primary" onClick={handleClose}> Kapat</button>
    
    </>
  );
};

export default ListProductUpdate;
