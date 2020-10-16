import React from "react";
import { useGetFirestore } from "./hooks/useGetFirestore";
import "./App.css";

export const App = () => {
  const { response, error, loading } = useGetFirestore("tasks");

  return (
    <div className="App">
      <h1>Crud React Firebase</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Ahy un error</p>}
      {response && <p>{response[0].nam}</p>}
    </div>
  );
};
