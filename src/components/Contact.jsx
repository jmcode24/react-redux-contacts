import React, { useState } from 'react';
import { Row, Col, Card, Accordion, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { ImUserCheck, ImPhone, ImLocation } from 'react-icons/im';
import firebase from '../firebase/config';

function Contact(props) {
  const contact = props.contact;
  const index = props.index;

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [location, setLocation] = useState(contact.location);
  const [isShowing, setIsShowing] = useState(false);

  const handleDelete = async () => {
    try {
      firebase.firestore().collection("contacts").doc(contact.id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      let contactData = {
        id: contact.id,
        name: name,
        phone: phone,
        location: location,
      };
      
      firebase.firestore().collection("contacts").doc(contact.id).update(contactData);
      
      handleClose();

    } catch(error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <Row>
        <Col>
        <Card className='mt-1 mb-2' key={index}>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header as={Card.Header}>Contact ID: {index + 1}</Accordion.Header>
              <Accordion.Body as={Card.Body}>
                <div className='d-flex justify-content-between'>
                  <div>
                    <Card.Text><span className='text-info fw-bold'>Name:</span>  {contact.name}</Card.Text>
                    <Card.Text><span className='text-warning fw-bold'>Phone Number:</span>  {contact.phone}</Card.Text>
                    <Card.Text><span className='text-success fw-bold'>Location:</span> {contact.location}</Card.Text>
                  </div>
                  <div className="me-2 bg-dark p-2 text-center">
                    <Button variant="outline-primary" onClick={() => setIsShowing(true)}>Edit</Button> <br />
                    <Button className="mt-3" variant='outline-danger' onClick={handleDelete}>Delete</Button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </Card>
        </Col>
      </Row>
      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-2">
            <InputGroup.Text id="basic-addon1"><ImUserCheck /></InputGroup.Text>
              <FormControl type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Name" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text id="basic-addon1"><ImPhone /></InputGroup.Text>
              <FormControl type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} aria-label="phone" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroup.Text id="basic-addon1"><ImLocation /></InputGroup.Text>
              <FormControl type="text" placeholder="Current Location" value={location} onChange={(e) => setLocation(e.target.value)} aria-label="location" aria-describedby="basic-addon1" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;