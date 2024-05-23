
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgrarjnrQ6Ke5h242gMDOxS8nkNOZ6oR8",
  authDomain: "rentify-32645.firebaseapp.com",
  projectId: "rentify-32645",
  storageBucket: "rentify-32645.appspot.com",
  messagingSenderId: "1037264385528",
  appId: "1:1037264385528:web:820a150da529578c26920d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };