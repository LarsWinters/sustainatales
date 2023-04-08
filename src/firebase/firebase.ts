// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvMTXxvTCIFNKAdgRidmviGU4KyQIkuuM",
  authDomain: "sustainatales.firebaseapp.com",
  projectId: "sustainatales",
  storageBucket: "sustainatales.appspot.com",
  messagingSenderId: "793581486971",
  appId: "1:793581486971:web:c912b3d905937fef7673de",
  measurementId: "G-1WS0L5JGG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
