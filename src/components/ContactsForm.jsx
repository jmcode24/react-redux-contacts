import React, {useState} from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { ImUserCheck, ImPhone, ImLocation } from 'react-icons/im';
import { v4 as uuid} from 'uuid';
import firebase from '../firebase/config';

function ContactsForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const signOut = async () => {
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    

    let newContact = {
      id: uuid(),
      name: name,
      phone: phone,
      location: location
    };

    firebase.firestore().collection("contacts").doc(newContact.id).set(newContact);

    } catch(error) {
      console.log(error)
    }

    setName('');
    setPhone('');
    setLocation('');
  }

  return(
    <div>
      <Container>
        <Row>
          <Col md='6' className='mx-auto mt-2'>
            <div className="d-flex justify-content-between mb-3 mt-2">
              <h4 className="fw-bolder fst-italic mark text-dark">Contacts page</h4>
              <Button variant="danger" size="sm" onClick={signOut}>Log out</Button>
            </div>
            <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1"><ImUserCheck /></InputGroup.Text>
                <FormControl type="text" placeholder="Full Name" required value={name} onChange={handleNameChange} aria-label="Name" aria-describedby="basic-addon1" />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1"><ImPhone /></InputGroup.Text>
                <FormControl type="number" placeholder="Phone Number" required value={phone} onChange={handlePhoneChange} aria-label="phone" aria-describedby="basic-addon1" />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1"><ImLocation /></InputGroup.Text>
                <FormControl type="text" placeholder="Current Location" required value={location} onChange={handleLocationChange} aria-label="location" aria-describedby="basic-addon1" />
            </InputGroup>
            <Button variant="outline-success" type="submit" className="w-100 mt-2">Add Contact</Button>
          </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactsForm;