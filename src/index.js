import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import rootReduce from "./reduce/reduce";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
// console.log(rootReduce)
const store = createStore(rootReduce, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
