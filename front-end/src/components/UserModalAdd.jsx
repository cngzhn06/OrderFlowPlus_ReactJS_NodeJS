import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListUserAdd from './ListUserAdd';


const UserModalAdd = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Button variant="primary" className='btn btn-dark' onClick={handleShow}>
        Kullanıcı Ekle
      </Button>

      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>Kullanıcı düzenleme</Modal.Title>
        </Modal.Header>
        <Modal.Body><ListUserAdd handleClose={handleClose}/></Modal.Body>
      </Modal>
    </>
  );
};

export default UserModalAdd;
