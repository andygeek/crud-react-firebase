import React from "react";
import { Form } from "./components/form/Form";
import { List } from "./components/list/List";
import "./App.css";

export const App = () => {

  return (
    <div className="app">
      <div className="container">
        <div className="col">
          <List />
        </div>
        <div className="col">
          <Form />
        </div>
      </div>
    </div>
  );
};
