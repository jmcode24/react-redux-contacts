import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { connect } from 'react-redux';

function ContactsList(props) {
  return(
    <div>
      <Container fluid>
        <Row>
          <Col md='6' className='mx-auto mt-4'>
            <h1 className='text-center text-danger'>Contacts List</h1>
            {props.contacts.map((contact, index) => {
              return (
                <Card className='mt-1' key={index}>
                  <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header as={Card.Header}>Customer ID: {index + 1}</Accordion.Header>
                        <Accordion.Body as={Card.Body}>
                          <div className='d-flex justify-content-around'>
                            <Card.Text><span className='text-info text-center'>Name</span> <br/> {contact.name}</Card.Text>
                            <Card.Text><span className='text-warning'>Phone Number</span> <br/> {contact.phone}</Card.Text>
                            <Card.Text><span className='text-primary'>Location</span> <br/> {contact.location}</Card.Text>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const sendDataAsProps = (state) => {
  return {contacts: state.contacts};
};

export default connect(sendDataAsProps)(ContactsList);