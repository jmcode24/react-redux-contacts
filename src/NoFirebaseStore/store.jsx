import { createStore, applyMiddleware, compose } from "redux";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import config from '../firebase/config';
import thunk from "redux-thunk";
import contactsReducer from "../reducers/contactsReducer";

export const store = createStore(contactsReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(config),
      reduxFirestore(config)
    )
  );