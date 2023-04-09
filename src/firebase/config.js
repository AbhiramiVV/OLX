import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8-Sz44N3S7XdOlfbYAqicJzdERZpWA1g",
    authDomain: "olx-mern.firebaseapp.com",
    projectId: "olx-mern",
    storageBucket: "olx-mern.appspot.com",
    messagingSenderId: "46554548540",
    appId: "1:46554548540:web:fc577d18835cd76f247639",
    measurementId: "G-0RW1S5G55W"
  };

export default firebase.initializeApp(firebaseConfig)