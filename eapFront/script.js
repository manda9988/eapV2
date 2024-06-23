// script.js

async function fetchRandomQuote() {
  try {
    const response = await fetch("http://localhost:3000/quote");
    const data = await response.json();
    document.getElementById("quote").textContent = data.text;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

document.getElementById("btn").addEventListener("click", fetchRandomQuote);

// Affiche une citation dès le chargement de la page
window.onload = fetchRandomQuote;
