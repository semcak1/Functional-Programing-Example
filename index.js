// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const unary = fn => (fn.length === 1 ? fn : arg => fn(arg));

// const answ = ["1", "2", "3"].map(unary(parseInt));
// console.log(answ);

const filter = (array, fn) => {
  let result = [];
  for (const value of array) {
    fn(value) ? result.push(value) : undefined;
  }
  return result;
};ok.rating[0] > 4.5
const result = filter([1, 2, 3], val => val <= 0);
console.log(result);
