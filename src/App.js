import React, { useEffect } from "react";
import { firebase } from "./firebase";
import "./App.css";

export const App = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("tasks").get();
        console.log(data.docs);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Crud React Firebase</h1>
    </div>
  );
};
