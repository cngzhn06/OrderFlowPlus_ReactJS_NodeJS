import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListProductUpdate from './ListProductUpdate';


const ProductModal = ({product}) => {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Button variant="primary" onClick={handleShow}>
        Güncelle
      </Button>

      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>Ürün düzenleme</Modal.Title>
        </Modal.Header>
        <Modal.Body><ListProductUpdate product={product} handleClose={handleClose}/></Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;
