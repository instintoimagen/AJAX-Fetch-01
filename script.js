import carta from "./db/Carta.js";

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment();

console.log(carta);

carta.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.image);
  $template.querySelector("img").setAttribute("alt", el.prodName);
  $template.querySelector("h3").textContent = el.prodName;
  $template.querySelector("h2").textContent = "$" + el.price;
  $template.querySelector("figcaption").textContent = el.description;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

/*
let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

async function loadPokemons(url) {
  try {
    $main.innerHTML;
  } catch (err) {}
} */

/* function listarProd() {
  carta.forEach((e) => {
    console.log(e);
  });
}
listarProd(); */
/* 
document.addEventListener("DOMContentLoaded", (e) => loadPokemons(pokeAPI));
 */
