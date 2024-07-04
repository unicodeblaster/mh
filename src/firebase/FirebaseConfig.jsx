// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxdFuWd6_gtqZJWo_P8pRCrKa8RRSrA5c",
  authDomain: "my-ecom-16f44.firebaseapp.com",
  projectId: "my-ecom-16f44",
  storageBucket: "my-ecom-16f44.appspot.com",
  messagingSenderId: "495888757061",
  appId: "1:495888757061:web:76c592904cdea39333ce2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }