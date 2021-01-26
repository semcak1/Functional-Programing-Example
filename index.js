// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const filter = (array, fn) => {
  let result = [];
  for (const value of array) {
    fn(value) ? result.push(value) : undefined;
  }
  return result;
};

const result = filter([1, 2, 3], val => val <= 0);
console.log(result);
