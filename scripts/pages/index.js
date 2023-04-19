import { getRecettes } from "../api.js";
import { cardFactory } from "../factories/cardFactory.js";
import { getAppareils, getIngredients, getUstensils } from "../utils/array.js";
import { filterIAU } from "../utils/filter.js";
import { search } from "../utils/search.js";
import { SetTagRecipes } from "../utils/tag.js";

const galery = document.querySelector("#galery");

const recettes = getRecettes();
const ingredients = getIngredients();
const appareils = getAppareils();
const ustensils = getUstensils();

recettes.forEach((r) => {
  const card = cardFactory(r);
  galery.appendChild(card);
});

const dropIngredient = document.querySelector("#ingredientsList");

const FilterIngrédient = (ingredients) => {
  ingredients.forEach((i) => {
    const button = document.createElement("p");
    button.classList.add("item");
    button.setAttribute("id-name", i);
    button.innerText = i;
    dropIngredient.appendChild(button);
  });
};

const dropAppareils = document.querySelector("#appareilsList");

const FilterAppareil = (appareils) => {
  appareils.forEach((i) => {
    const button = document.createElement("p");
    button.classList.add("item");
    button.setAttribute("id-name", i);
    button.innerText = i;
    dropAppareils.appendChild(button);
  });
};

const dropUstensils = document.querySelector("#ustensilesList");

const FilterUstensil = (ustensils) => {
  ustensils.forEach((i) => {
    const button = document.createElement("p");
    button.classList.add("item");
    button.setAttribute("id-name", i);
    button.innerText = i;
    dropUstensils.appendChild(button);
  });
};

const buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    this.children[1].focus();
  });
});


const initFiltres = () => {
  FilterIngrédient(ingredients);
  FilterAppareil(appareils);
  FilterUstensil(ustensils);
  filterIAU();
  SetTagRecipes();
  search();
};
initFiltres();