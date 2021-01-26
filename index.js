// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const outer = value => {
  return fn => {
    typeof fn === "function" && fn(value);
    console.log(value);
  };
};

outer(5)(val => {
  console.log("Value is ", val);
});
