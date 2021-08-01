import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { employeeTracker } from "./reducers";

function setInitialState() {
  if (localStorage.length > 0) {
    return JSON.parse(localStorage.getItem("state"));
  } else {
    return [];
  }
}

const store = createStore(employeeTracker, setInitialState());

store.subscribe(() => {
  console.log(store.getState());
  const state = store.getState();
  localStorage.clear();
  localStorage.setItem("state", JSON.stringify(state));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
