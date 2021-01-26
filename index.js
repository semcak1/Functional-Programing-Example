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

// const FourEach = (arr, fn) => {
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i]);
//   }
// };

// let arr1 = [10, 25, 36, 4, 54, 64, 7, 81];

// //verilen dizideki elemanın çift mi ?
// const isEven = number => {
//   if (!(number % 2)) {
//     return console.log(number, "is even");
//   }
// };

// //verilen dizideki elemanın karekoku var mı ?
// const hasSquareRoot = number => {
//   const sqr = Math.sqrt(number);
//   if ((sqr * 10) % 10 === 0) {
//     let sqrNum = Math.sqrt(number);
//     return console.log(number, "is squre of", sqrNum);
//   }
// };

// FourEach(arr1, num => {
//   // isEven(num)
//   hasSquareRoot(num);
// });
