// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const curry = fn => {
  return arg1 => arg2 => fn(arg1, arg2);
};
const newFonk = curry((x, y) => x * y);

console.log(newFonk(3)(4));
