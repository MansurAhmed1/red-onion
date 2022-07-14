import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB7psHSvKwZUhE2Ne2EbkSf9iPt609_BdA",
  authDomain: "practice-firebase-auth-b9efb.firebaseapp.com",
  projectId: "practice-firebase-auth-b9efb",
  storageBucket: "practice-firebase-auth-b9efb.appspot.com",
  messagingSenderId: "906521614356",
  appId: "1:906521614356:web:e5f1b0b5ab7719564cef01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;