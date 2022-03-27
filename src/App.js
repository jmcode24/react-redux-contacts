import React, {useEffect} from 'react';
import ContactsForm from './components/ContactsForm';
import ContactsList from './components/ContactsList';
import firebase from './firebase/config';
import { useDispatch } from 'react-redux';
import { setContacts } from './actions/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.firestore().collection("contacts").orderBy("id", "desc").onSnapshot((document) => {
      let contacts = [];

      document.forEach((doc) => {
        contacts.push(doc.data());
      });

      dispatch(setContacts(contacts));
    });
  }, []);

  return (
    <div>
      <ContactsForm />
      <ContactsList />
    </div>
  );
}

export default App;
