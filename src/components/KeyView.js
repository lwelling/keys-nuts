import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

const KeyView = ({ keyData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        view
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>FCC ID: {keyData.fccId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Stock #</th>
                <th>Make</th>
                <th>Model #</th>
                <th>IC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{keyData.stockNumber}</td>
                <td>{keyData.make}</td>
                <td>{keyData.modelNumber}</td>
                <td>{keyData.ic}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default KeyView;
