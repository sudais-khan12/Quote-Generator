let url = "https://api.quotable.io/random";

let button = document.querySelector("button");
let quote = document.querySelector("p");
let author = document.querySelector("h3");
let btn = document.querySelector("#toggle-switch");
let body = document.querySelector("body");
let loader = document.querySelector(".hide");
let mode = true;

async function getQuote() {
  let promise = await fetch(url);
  let data = await promise.json();
  quote.innerHTML = data.content;
  author.innerHTML = "By : " + data.author;
  loader.style.display = "none";
}

let darkMode = () => {
  if (mode) {
    body.style.backgroundColor = "rgba(39, 38, 38, 0.685)";
    mode = false;
  } else {
    body.style.backgroundColor = "#FF715B";
    mode = true;
  }
};

button.addEventListener("click", () => {
  getQuote();
  loader.style.display = "block";
});

btn.addEventListener("click", () => {
  darkMode();
});
