import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

const KeyView = ({ location }) => {
  const keyData = location.state;
  return (
    <Container>
      <Row>
        <Col gutter="false" sm={true}>
          <Image src={keyData.photoURL} thumbnail />
        </Col>
        <Col gutter="false" sm={true}>
          <h1>{keyData.make}</h1>
          Stock #{keyData.stockNumber} <br />
        </Col>
        <Col gutter="false" sm={true}>
          Model #<strong>{keyData.modelNumber}</strong> <br />
          IC <strong>{keyData.ic}</strong> <br />
          FCC ID <strong>{keyData.fccId}</strong>
        </Col>
      </Row>
      <Row>
        <Col gutter="false" sm={true}>
          <p>
            For professional locksmiths only. Buyer agrees to reprogram key fob
            and replace key. Keys Nuts accepts no responsibility for actions
            taken with inventory after transaction.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default KeyView;
