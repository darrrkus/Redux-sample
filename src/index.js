import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, reset, incBy } from "./actions";
import "./index.css";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const bindActionCreator =
  (creator, dispatch) =>
  (...args) => {
    dispatch(creator(...args));
  };

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const resetDispatch = bindActionCreator(reset, dispatch);
const incByDispatch = bindActionCreator(incBy, dispatch);

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
document.getElementById("inc-by").addEventListener("click", () => {
  incByDispatch(10, 5);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
