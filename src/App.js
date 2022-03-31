import React, {useEffect} from 'react';
import Router from './Router';
import firebase from './firebase/config';
import { useDispatch } from 'react-redux';
import { setContacts } from './actions/actions';
import { setContactDetails } from './actions/authAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((contact) => {
      if (contact) {
        //set user state to user details
        dispatch(setContactDetails(contact));
      } else {
        //set user state to null
        dispatch(setContactDetails(null))
      }
    });
  });

  useEffect(() => {
    firebase.firestore().collection("contacts").orderBy("id", "desc").onSnapshot((document) => {
      let contacts = [];

      document.forEach((doc) => {
        contacts.push(doc.data());
      });

      dispatch(setContacts(contacts));
    });
  }, []);

  return ( <Router /> );
}

export default App;
