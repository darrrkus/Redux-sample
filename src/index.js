import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";
import "./index.css";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const { inc, dec, reset, incBy } = bindActionCreators(actions, dispatch);

subscribe(() => {
  document.getElementById("counter").textContent = getState();
});

document.getElementById("inc").addEventListener("click", () => {
  inc();
});
document.getElementById("dec").addEventListener("click", () => {
  dec();
});
document.getElementById("res").addEventListener("click", () => {
  reset();
});
document.getElementById("inc-by").addEventListener("click", () => {
  incBy(10);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
