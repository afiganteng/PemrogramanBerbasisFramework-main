import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWISFULBz-pWXh3kARxZ9PyZ1HqzBszsk",
  authDomain: "fir-reactjs-minggu10.firebaseapp.com",
  projectId: "fir-reactjs-minggu10",
  storageBucket: "fir-reactjs-minggu10.appspot.com",
  messagingSenderId: "671127024382",
  appId: "1:671127024382:web:90f68ba653a2876674ebaf",
  measurementId: "G-X1BXF2W036"
  };
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;