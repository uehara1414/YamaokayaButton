import * as firebase from 'firebase';

// Initialize Firebase
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

module.exports = firebase;