import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { firestore } from '../firebase.js';

const Contact = () => {

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        const timeStamp = new Date();
        console.log(timeStamp)
        e.preventDefault();
        if (message.email && message.subject && message.body) {
                // write the Object to the firestore db
        firestore.collection("messages").doc(message.email+timeStamp).set(message)
        .then(function() {
            console.log("Document successfully written!");
            setMessage('')
            alert("Message Sent!")
          // reset the state
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
          } else {
            alert("Please fill out entire form...")
          }
        }

    const handleChange = (e) => {
        setMessage({
          ...message,
          [e.target.id]: e.target.value
        })
      };

    return (
        <div className="form">
            <h1>
                Contact Keys Nuts
            </h1>

            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="email">
                    <Form.Control type="email" rows="5" placeholder="Enter your email..." onChange={(e) => handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Control type="text" placeholder="Subject..." onChange={(e) => handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="body">
                    <Form.Control as="textarea" rows="5" placeholder="Body..." onChange={(e) => handleChange(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Contact;
