import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

import AddKey from "./AddKey";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";
import KeyView from "./KeyView";

const Browse = () => {
  const [keysList, setKeys] = useState([]);

  const keysSortedByStock = keysList.sort((a, b) =>
    parseInt(a.stockNumber) > parseInt(b.stockNumber) ? 1 : -1
  );

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
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Make</th>
            <th>FCC ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {keysSortedByStock ? (
            keysSortedByStock.map((data, i) => (
              <tr key={i}>
                {console.log(keysList)}
                <td>{data.make}</td>                
                <td>{data.ic}</td>
                <td>
                  <KeyView keyData={data} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <Spinner animation="border" role="status" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Browse;
