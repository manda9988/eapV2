// script.js

let count = 0;

document.getElementById("btn").addEventListener("click", function () {
  count++;
  document.getElementById("message").textContent = count;
});

document.getElementById("cancel").addEventListener("click", function () {
  count = 0;
  document.getElementById("message").textContent = count;
});
