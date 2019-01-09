import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import store from "./components/redux/store/store";

import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import history from "./components/utils/history";

window.jsview = JSON.stringify;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>     
        <App />    
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
