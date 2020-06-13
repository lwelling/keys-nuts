import React from 'react';
import { KeysContext } from './providers/KeysProvider'

import { Table } from 'react-bootstrap';
import AddKey from './AddKey';

const Browse = () => {
  return (
    <KeysContext.Consumer>
      {(keysList) => 
        <div className="browse-page-1">
        <AddKey />
        <Table striped bordered hover size="sm">  
          <thead>
            <tr>
              <th>Stock #</th>
              <th>Make</th>
              <th>Model #</th>
              <th>FCC ID</th>
              <th>IC</th>
            </tr>
          </thead>
          <tbody>
            {keysList ? keysList.map((data, i) => (
                        <tr key={i}>
                          {console.log(keysList)}
                          <td>{data.stockNumber}</td>
                          <td>{data.make}</td>
                          <td>{data.modelNumber}</td>
                          <td>{data.fccId}</td>
                          <td>{data.ic}</td>
                        </tr>
            )) : null}
          </tbody>
        </Table>
      </div>
      }
    </KeysContext.Consumer>
  )
}

export default Browse;
