import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, reset } from "./actions";
import "./index.css";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const resetDispatch = () => dispatch(reset());

subscribe(() => {
  document.getElementById("counter").textContent = getState();
});

document.getElementById("inc").addEventListener("click", () => {
  incDispatch();
});
document.getElementById("dec").addEventListener("click", () => {
  decDispatch();
});
document.getElementById("res").addEventListener("click", () => {
  resetDispatch();
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
