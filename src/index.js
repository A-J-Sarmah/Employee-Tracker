import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { employeeTracker } from "./reducers";

const store = createStore(employeeTracker);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
