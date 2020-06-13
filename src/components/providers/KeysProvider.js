import React, { createContext, useState, useEffect } from "react";

import { firestore } from "../../firebase";
import { collectIdsAndDocs } from "../../utilities";

export const KeysContext = createContext();

const KeysProvider = (props) => {
  const [keysList, setKeys] = useState("");
  const { children } = props;

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
    <KeysContext.Provider value={keysList}>{children}</KeysContext.Provider>
  );
};

export default KeysProvider;