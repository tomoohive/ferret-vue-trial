import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/storage";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuor8B91s4NgpcccmsSJOXU_DNpp_Fy5Q",
  authDomain: "tohackmeapp.firebaseapp.com",
  databaseURL: "https://tohackmeapp.firebaseio.com",
  projectId: "tohackmeapp",
  storageBucket: "tohackmeapp.appspot.com",
  messagingSenderId: "527927050667",
  appId: "1:527927050667:web:d55f79996a79f5139892ee"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const userCollection = db.collection('user')
const clothesCollection = db.collection('clothes')

export {
  db,
  auth,
  userCollection,
  clothesCollection
};
