import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListUserUpdate from './ListUserUpdate';


const UserModal = ({user}) => {
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
          <Modal.Title>Kullanıcı düzenleme</Modal.Title>
        </Modal.Header>
        <Modal.Body><ListUserUpdate user={user} handleClose={handleClose}/></Modal.Body>
      </Modal>
    </>
  );
};

export default UserModal;
