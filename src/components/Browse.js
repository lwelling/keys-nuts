import React, { useState, useEffect } from "react";
import { Container, Spinner, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import AddKey from "./AddKey";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

const Browse = () => {
  const [keysList, setKeys] = useState([]);

  const keysSortedByMake = keysList.sort((a, b) => (a.make > b.make ? 1 : -1));

  useEffect(() => {
    async function onSnapShotListener() {
      let unsubscribeFromOnSnapShotListener = firestore
        .collection("keys")
        .onSnapshot((snapshot) => {
          const keys = snapshot.docs.map(collectIdsAndDocs);
          setKeys(keys);
        });
      return () => {
        unsubscribeFromOnSnapShotListener();
      };
    }
    onSnapShotListener();
  }, []);

  return (
    <div className="browse-page-1">
      <AddKey />
      <Container>
        {keysSortedByMake ? (
          keysSortedByMake.map((data, i) => (
            <Row className="key-listing" sm={true} key={i}>
              <Col sm={true}>
                <Image src={data.photoURL} className="key-photo" thumbnail />
              </Col>
              <Col sm={true}>
                <h2>{data.make}</h2> <br />
                IC <strong>{data.ic}</strong> <br />
                FCC ID <strong>{data.fccId}</strong>
              </Col>
              <Col sm={true}>
                <Link
                  to={{
                    pathname: `/browse/${data.stockNumber}`,
                    state: data,
                  }}
                >
                  view
                </Link>
              </Col>
            </Row>
          ))
        ) : (
          <Row>
            <Col sm={true}>
              <Spinner animation="border" role="status" />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Browse;
