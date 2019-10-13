import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import BodyArea from "./components/BodyArea";
import { Provider } from "react-redux";
import store from './store';

import "./styles.css";


function App() {
  return (
    <div className="container">
      <Header text="SHAPES" />
      <BodyArea />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
