// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnY19_XralmSwBgZ5sDEUJrq9p3NTafOg",
  authDomain: "react-contacts-app-84097.firebaseapp.com",
  projectId: "react-contacts-app-84097",
  storageBucket: "react-contacts-app-84097.appspot.com",
  messagingSenderId: "35229111990",
  appId: "1:35229111990:web:2ebccb304ee3f8c0f6f817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;