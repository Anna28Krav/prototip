// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAYynCBlk2Bbudq8CTvXCTMNE-jQH36hoE",
  authDomain: "gameverse-9494c.firebaseapp.com",
  databaseURL: "https://gameverse-9494c-default-rtdb.europe-west1.firebasedatabase.app", // ← ВАЖЛИВО!
  projectId: "gameverse-9494c",
  storageBucket: "gameverse-9494c.appspot.com",
  messagingSenderId: "528371362556",
  appId: "1:528371362556:web:741f2bcf9a359cb6b34579",
  measurementId: "G-2LEEBJBPTE"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
