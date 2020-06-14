import React, { useState, useEffect } from "react";
import { Spinner, Card } from "react-bootstrap";
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
        <div className="browse-container">
        {keysSortedByMake ? (
          keysSortedByMake.map((data, i) => (

              <Card border="secondary" key={i} style={{ width: '18rem', margin: '1rem' }}>
                <Card.Img variant="top" src={data.photoURL} />
                <Card.Body>
                  <Card.Title>{data.make}</Card.Title>
                  <Card.Text>
                    IC <strong>{data.ic}</strong> <br />
                    FCC ID <strong>{data.fccId}</strong>
                  </Card.Text>
                    <Link
                      to={{
                        pathname: `/browse/${data.stockNumber}`,
                        state: data,
                      }}
                      className="stretched-link">
                        view
                    </Link>   
                </Card.Body>
              </Card>
              
          ))
        ) : (

              <Spinner style={{ margin: "3rem" }} animation="border" role="status" />

        )}
        </div>
    </div>
  );
};

export default Browse;
