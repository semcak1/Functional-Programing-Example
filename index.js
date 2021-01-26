// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const fonk1 = (f, g) => {
  return x => {
    console.log(f(g(x)));
  };
};

const addOne = x => {
  return x + 1;
};

const timesTwo = x => {
  return x * 2;
};

const anyFunc = fonk1(addOne, timesTwo);
anyFunc(5);
