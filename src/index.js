import { createStore } from "redux";

const heading = document.getElementById("heading");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

red.onclick = () => store.dispatch({ type: "CHANGE_COLOR", color: "red"});
blue.onclick = () => store.dispatch({ type: "CHANGE_COLOR", color: "blue"});
green.onclick = () => store.dispatch({ type: "CHANGE_COLOR", color: "green"});
yellow.onclick = () => store.dispatch({ type: "CHANGE_COLOR", color: "yellow"});

const reducer = ((state = { look: "black" }, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { look: action.color }
    default:
      return state;
  }
})
const store = createStore(reducer)

store.subscribe(() => {
  heading.className = `${store.getState().look}`
})