// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//  1----- parametre olarak 2 fonksiyon alan bir fonksiyon geriye  2.fonksiyon 1. sine parametre olarak yazılıyor ve değer döndürülüyor.
const fonk1 = (f, g) => {
  return x => {
    return f(g(x));
  };
};

//2-----çeşitli işlemler yapan fonksiyornlarımız
const add1 = x => {
  return x + 1;
};
const multi2 = x => {
  return x * 2;
};
const sqr2 = x => {
  return x * x;
};
const res2 = x => {
  return x % 2;
};

//3---- 1 nolu fonksiyonu çağırıyoruz ve döndürdüğü değeri denemeye ayıtoruz. denemeye parametre verip  yazdırıyoruz ve sonucu görüyoruz.
const deneme = fonk1(add1, multi2);
console.log(deneme(2));
