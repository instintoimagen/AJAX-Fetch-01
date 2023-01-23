import carta from "./db/Carta.js";

const $menu = document.querySelector(".menu"),
  $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment();

//console.log(carta);

function listarProd(menu) {
  carta.forEach((el) => {
    if (el.category === menu) {
      $menu.style.display = "none";
      $cards.innerHTML = "";

      $template.querySelector("img").setAttribute("src", el.image);
      $template.querySelector("img").setAttribute("alt", el.prodName);
      $template.querySelector("h3").textContent = el.prodName;
      $template.querySelector("h2").textContent = "$" + el.price;
      $template.querySelector("figcaption").textContent = el.description;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    }
  });
  $cards.appendChild($fragment);
}

document.addEventListener("click", (e) => {
  if (e.target.matches("#btn_pizzas")) {
    console.log("Cargar Pizzas");
    listarProd("Pizzas");
  }
  if (e.target.matches("#btn_lomos")) {
    console.log("Cargar Lomos");
    listarProd("Lomitos");
  }
  if (e.target.matches("#btn_empanadas")) {
    console.log("Cargar Empanadas");
    listarProd("Empanadas");
  }
});
