import React, {useState}  from 'react';

import './modal.css'
import {Button, Modal} from "react-bootstrap";


const Modalapp = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={handleShow}>
              Launch demo modal window
          </Button>

          <Modal className='first_modal_button' show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                      Save Changes
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  );
}

export default Modalapp
