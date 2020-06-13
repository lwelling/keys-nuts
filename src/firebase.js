import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-storage";

const config = {
    apiKey: "AIzaSyB4HkFv5KKD0x560-oEuF-rQaSj3JfSMOU",
    authDomain: "keys-nuts.firebaseapp.com",
    databaseURL: "https://keys-nuts.firebaseio.com",
    projectId: "keys-nuts",
    storageBucket: "keys-nuts.appspot.com",
    messagingSenderId: "841318069246",
    appId: "1:841318069246:web:d0c639918f75ef4ea1c6af",
    measurementId: "G-JJVNKN5V8T"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

