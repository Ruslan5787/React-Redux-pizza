import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";

import {App} from "./App";

const initialState = {
  counter: 21
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return {...state, counter: state.counter += 1}
    case "get":
      return {...state, counter: state.counter -= 1}
  }
}

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'add'})

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App/>
  </Router>
);
