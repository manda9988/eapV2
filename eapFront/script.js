// script.js

const quotes = [
  "Le voyage de mille lieues commence par un pas.",
  "Chaque matin est une nouvelle chance.",
  "La paix vient de l'intérieur, ne la cherchez pas à l'extérieur.",
  "Ralentir, c'est parfois avancer plus vite.",
  "Le calme est la clé pour trouver la paix intérieure.",
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

document.getElementById("btn").addEventListener("click", displayRandomQuote);

// Affiche une citation dès le chargement de la page
window.onload = displayRandomQuote;
