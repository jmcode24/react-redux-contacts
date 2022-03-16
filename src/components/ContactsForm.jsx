import React, {useState} from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { ImUserCheck, ImPhone, ImLocation } from 'react-icons/im';
import { v4 as uuid} from 'uuid';
import { addContactAction } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function ContactsForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  
  
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    return state.contacts;
  });


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
    

    let newContact = {
      id: uuid(),
      name: name,
      phone: phone,
      location: location
    };

    dispatch(addContactAction(newContact));

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
          <h2 className='text-secondary text-center mt-5'>{contacts.length ? 'Contacts List' : 'No Contact'}</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactsForm;