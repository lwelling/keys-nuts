import React, { useState } from 'react';

import DropdownMenu from './DropdownMenu.js';
import { Form, Button, Modal } from 'react-bootstrap';
import { firestore } from '../firebase.js';


const AddKey = () => {

  const [newKey, setNewKey] = useState({
    stockNumber: null,
    make: null,
    modelNumber: null,
    fccId: null,
    ic: null,
  })

  const make = ["Chevrolet", "Chrysler", "Nissan", "Lexus", "Jeep", "Ram", "Toyota", "Mazda", "Maserati", "Ford", "Honda", "Genesis", "Hyundai"]

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addKeyToFirestore = (e) => {
    e.preventDefault();
    
    // write the Object to the firestore db
    firestore.collection("keys").doc(newKey.stockNumber).set(newKey)
      .then(function() {
          console.log("Document successfully written!");
          
        // reset the state
        setNewKey({
          stockNumber: null,
          make: null,
          modelNumber: null,
          fccId: null,
          ic: null,
        })
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      handleClose();
    }

  const handleChange = (e) => {
    setNewKey({
      ...newKey,
      [e.target.id]: e.target.value
    })
  };

    return (
        <div>

          <Button variant="primary" onClick={handleShow}>
            Add Key
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Key</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => addKeyToFirestore(e)}>

                <Form.Group controlId="stockNumber">
                  <Form.Control type="text" placeholder="Stock Number" onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <DropdownMenu title="make" dataArray={make} handleChange={handleChange} />

                <Form.Group controlId="modelNumber">
                  <Form.Control type="text" placeholder="Model Number" onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <Form.Group controlId="fccId">
                  <Form.Control type="text" placeholder="FCC ID" onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <Form.Group controlId="ic">
                  <Form.Control type="text" placeholder="IC" onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>

            </Modal.Body>
          </Modal>
        </div>
    )
}

export default AddKey;
