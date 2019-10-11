import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import BodyArea from './components/BodyArea';

import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header text='SHAPES' />
     
      <BodyArea text='Something' /> 
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
