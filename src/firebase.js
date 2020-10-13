import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4Qdb--mnxsbRfIThEXPbbQL3dOuKHlME",
  authDomain: "test-crud-2d2b6.firebaseapp.com",
  databaseURL: "https://test-crud-2d2b6.firebaseio.com",
  projectId: "test-crud-2d2b6",
  storageBucket: "test-crud-2d2b6.appspot.com",
  messagingSenderId: "350892994989",
  appId: "1:350892994989:web:1746bffa65ee3877ba7124",
  measurementId: "G-5ST5R5Y7KV",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
