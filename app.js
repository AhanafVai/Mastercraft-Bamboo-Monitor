// getting elements
const hamburger = document.querySelector("#hamburger");
const off = document.querySelector("#off");
const menu = document.querySelector("#menu");
const overlay = document.querySelector("#overlay");

// event listeners

// functions & functionality
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  off.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  overlay.classList.add("overlay");
});
off.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  off.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
});
