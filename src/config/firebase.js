import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCkqQpRXlJlbE3Oqdetn4rNU34gOgJ0jbQ",
    authDomain: "mental-health-center-27530.firebaseapp.com",
    projectId: "mental-health-center-27530",
    storageBucket: "mental-health-center-27530.appspot.com",
    messagingSenderId: "1082760898572",
    appId: "1:1082760898572:web:37b8e80b562767d8336629",
    measurementId: "G-KT6D6Y4GSL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const dataBase = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();

  export { dataBase, storage, auth };