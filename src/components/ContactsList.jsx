import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Contact from './Contact'

function ContactsList() {
  const contacts = useSelector((state) => {
    return state.contacts.contacts;
  });

  return(
    <div>
      <Container>
        <Row>
          <Col md='6' className='mx-auto'>
          {contacts.length ? (
            <>
            <h3 className="text-secondary text-center mt-4 mb-2">Contacts List</h3>
              {contacts.map((contact, index) => {
                return (
                  <Contact key={contact.id} contact={contact} index={index} />
                );
              })}
            </>
          ) : (<>
                <h3 className="text-secondary text-center mt-4 mb-2">No Contact</h3>
              </>)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default ContactsList;