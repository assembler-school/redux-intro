import "./styles.css";

import { createStore } from "redux";

import balanceReducer from "./balanceReducer";

import { addMoney, resetMoney, withdrawMoney } from "./balanceActions";

const store = createStore(balanceReducer);

const valueEl = document.getElementById("value");

function render() {
  valueEl.innerHTML = store.getState();
}

render();
store.subscribe(render);

store.subscribe(() => console.log("I also will be called"));

store.subscribe(() => console.log(store.getState()));

document.getElementById("increment").addEventListener("click", function () {
  store.dispatch(addMoney(100));
});

document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch(withdrawMoney(50));
});

document.getElementById("reset").addEventListener("click", function () {
  store.dispatch(resetMoney());
});
