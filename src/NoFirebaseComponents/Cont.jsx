import React, { useState } from 'react';
import { Card, Accordion, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { deleteContactAction, editContactAction } from '../actions/actions';
import { useDispatch } from 'react-redux';
import { ImUserCheck, ImPhone, ImLocation } from 'react-icons/im';

function Contact(props) {
  const contact = props.contact;
  const index = props.index;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAction(contact.id))
  };

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [location, setLocation] = useState(contact.location);
  const [isShowing, setIsShowing] = useState(false);

  const handleSubmit = () => {
    let contactData = {
      id: contact.id,
      name: name,
      phone: phone,
      location: location,
    };

    dispatch(editContactAction(contact.id, contactData));

    handleClose();
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <Card className='mt-1 mb-2' key={index}>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header as={Card.Header}>Customer ID: {index + 1}</Accordion.Header>
              <Accordion.Body as={Card.Body}>
                <div className='d-flex justify-content-around'>
                  <Card.Text><span className='text-info text-center'>Name</span> <br/> {contact.name}</Card.Text>
                  <Card.Text><span className='text-warning'>Phone Number</span> <br/> {contact.phone}</Card.Text>
                  <Card.Text><span className='text-primary'>Location</span> <br/> {contact.location}</Card.Text>
                </div>
                <hr/>
                <div className='d-flex justify-content-center'>
                  <Button onClick={() => setIsShowing(true)}>Edit</Button>
                  <Button variant='danger' className='ms-3' onClick={handleDelete}>Delete</Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </Card>
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