import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Contact from './Contact'

function ContactsList() {
  const contacts = useSelector((state) => {
    return state.contacts;
  });

  return(
    <div>
      <Container fluid>
        <Row>
          <Col md='6' className='mx-auto'>
            {contacts.map((contact, index) => {
              return (
                <Contact key={contact.id} contact={contact} index={index} />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default ContactsList;