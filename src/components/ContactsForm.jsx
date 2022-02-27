import React, {useState} from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { ImUserCheck, ImPhone, ImLocation } from 'react-icons/im';
import { v4 as uuid} from 'uuid';
import { addContactAction } from '../actions/actions';
import { connect } from 'react-redux';

function ContactsForm(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [submitting, setSubmitting] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(false)

    let newContact = {
      id: uuid(),
      name: name,
      phone: phone,
      location: location
    };

    props.addContact(newContact);

    setName('');
    setPhone('');
    setLocation('');
  }

  return(
    <div>
      <Container>
        <Row>
          <Col md='6' className='mx-auto mt-2'>
            <h1 className="text-center text-success mb-3 mt-2">Redux Contacts App</h1>
            <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1"><ImUserCheck /></InputGroup.Text>
                <FormControl type="text" placeholder="Full Name" value={name} onChange={handleNameChange} aria-label="Name" aria-describedby="basic-addon1" />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1"><ImPhone /></InputGroup.Text>
                <FormControl type="number" placeholder="Phone Number" value={phone} onChange={handlePhoneChange} aria-label="phone" aria-describedby="basic-addon1" />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1"><ImLocation /></InputGroup.Text>
                <FormControl type="text" placeholder="Current Location" value={location} onChange={handleLocationChange} aria-label="location" aria-describedby="basic-addon1" />
            </InputGroup>
            <Button variant="outline-success" type="submit" className="w-100 mt-2">Add Contact</Button>
          </Form>
          <h1 className='text-center text-secondary mt-5'>{submitting ? 'No Contacts' : 'Contacts List'}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const sendActionAsProps = {
  addContact: addContactAction,
};

export default connect(null, sendActionAsProps)(ContactsForm);