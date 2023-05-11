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

/**

Function : FilterIngrédient
Create buttons for each ingredient and add them to the list of filtered ingredients.
@param {array} ingredients - The list of ingredients to be displayed.
*/

const FilterIngrédient = (ingredients) => {
  const uniqueIngredients = new Set(ingredients);
  uniqueIngredients.forEach((i) => {
    const button = document.createElement("p");
    button.classList.add("item");
    button.setAttribute("id-name", i);
    button.innerText = i;
    dropIngredient.appendChild(button);
  });
};

const dropAppareils = document.querySelector("#appareilsList");

/**
Function : FilterAppareil
Create buttons for each device and add them to the list of filtered devices.
@param {array} appareils - The list of devices to be displayed.
*/

const FilterAppareil = (appareils) => {
  const uniqueAppareils = new Set(appareils);
  uniqueAppareils.forEach((i) => {
    const button = document.createElement("p");
    button.classList.add("item");
    button.setAttribute("id-name", i);
    button.innerText = i;
    dropAppareils.appendChild(button);
  });
};


const dropUstensils = document.querySelector("#ustensilesList");

/**
Function : FilterUstensil
Create buttons for each utensil and add them to the list of filtered utensils.
@param {array} ustensils - The list of utensils to be displayed.
*/

const FilterUstensil = (ustensils) => {
  const uniqueUstensils = new Set(ustensils);
  uniqueUstensils.forEach((i) => {
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