// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCaHrDabr7SogL-I6aCzJuU06O4-kmww0',
  authDomain: 'todo-react-fb-92b4d.firebaseapp.com',
  projectId: 'todo-react-fb-92b4d',
  storageBucket: 'todo-react-fb-92b4d.appspot.com',
  messagingSenderId: '279907027871',
  appId: '1:279907027871:web:c35dabcc7cd70c431a0baa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
