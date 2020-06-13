import React from 'react';

import { Form } from 'react-bootstrap';

const DropdownMenu = ({ title, dataArray, handleChange }) => {
    return (
        <Form.Group controlId={title}>
            <Form.Control
                defaultValue={`Select ${title}...`}
                as="select"
                onChange={handleChange} >
                <option>Select {title}...</option>
                {dataArray.map((data, i) => (<option id={data} key={i} >{data}</option>))}
            </Form.Control>
        </Form.Group>
    )
}

export default DropdownMenu;
