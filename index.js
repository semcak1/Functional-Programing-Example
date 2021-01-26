// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const outer = (f) => {
  const inner= () => {
    console.log(f);
  };
  return inner
};



const anyFunc = outer(5);
anyFunc();
