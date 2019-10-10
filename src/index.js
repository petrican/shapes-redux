import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';

import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header text='SHAPES' />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
