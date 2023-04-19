import { cardFactory } from "../factories/cardFactory.js";
import { TagFilter } from "./algorithmRecipes.js";

const ingredients = document.querySelectorAll("#ingredientsList");
const appareils = document.querySelectorAll("#appareilsList");
const ustensiles = document.querySelectorAll("#ustensilesList");

let selectedIngredients = [];
let selectedAppareils = [];
let selectedUstensiles = [];

const galery = document.querySelector("#galery");

/**
 Function : SetTagRecipes

 * Attaches click event listeners to each ingredient, appareil, and ustensile item,
 * adds the selected item's name to its corresponding array and creates a tag with its name,
 * and updates the gallery of recipes based on selected filters.

 * @param {Array} ingredient
 * @param {Array} appareil
 * @param {Array} ustensile
 * @returns {void}
 */

function SetTagRecipes() {
  ingredients.forEach((ingredient) => {
    ingredient.addEventListener("click", (event) => {
      if (event.target.innerText.includes("\n")) {
        console.log("Choisir un ingrédient");
      } else {
        selectedIngredients.push(event.target.innerText);
        createTag(event.target.innerText, "ingredients");
        updateGallery();
      }
    });
  });

  appareils.forEach((appareil) => {
    appareil.addEventListener("click", (event) => {
      if (event.target.innerText.includes("\n")) {
        console.log("Choisir un appareil");
      } else {
        selectedAppareils.push(event.target.innerText);
        createTag(event.target.innerText, "appareils");
        updateGallery();
      }
    });
  });

  ustensiles.forEach((ustensile ) => {
    ustensile.addEventListener("click", (event) => {
      if (event.target.innerText.includes("\n")) {
        console.log("Choisir un ustensile");
      } else {
        selectedUstensiles.push(event.target.innerText);
        createTag(event.target.innerText, "ustensiles");
        updateGallery();
      }
    });
  });
}

/**
 Function : createTag

 * Create a new tag element in the form of a card.

 * @param {string} name - The name of the tag to create.
 * @param {string} type - The type of tag being created (ingredients, appareils, ustensiles).
 * @returns {void}
 */

const createTag = (name, type) => {

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id-name", name);
  card.setAttribute("id", type);
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = name;
  cardHeader.appendChild(cardTitle);
  const cardClose = document.createElement("div");
  cardClose.classList.add("card-close");

  cardClose.addEventListener("click", () => {
    row.removeChild(card);
    removeTag(name, type);
  });

  const cardCloseButton = document.createElement("button");
  const cardCloseIcon = document.createElement("i");
  cardCloseIcon.classList.add("fa-sharp", "fa-regular", "fa-circle-xmark");
  cardCloseButton.appendChild(cardCloseIcon);
  cardClose.appendChild(cardCloseButton);
  cardHeader.appendChild(cardClose);
  card.appendChild(cardHeader);

  const row = document.querySelector(".row");
  row.appendChild(card);
};

/**
 Function : removeTag

 * Removes a tag from the selected tags array depending on the tag type (ingredients, appareils, or ustensiles).

 * @param {string} name - The name of the tag to remove.
 * @param {string} type - The type of the tag to remove (ingredients, appareils, or ustensiles).
 * @returns {void}
 */

const removeTag = (name, type) => {
  if (type === "ingredients") {
    selectedIngredients = selectedIngredients.filter(
      (ingredient) => ingredient !== name
    );
  }
  if (type === "appareils") {
    selectedAppareils = selectedAppareils.filter(
      (appareil) => appareil !== name
    );
  }
  if (type === "ustensiles") {
    selectedUstensiles = selectedUstensiles.filter(
      (ustensile) => ustensile !== name
    );
  }
  updateGallery();
};

const updateGallery = () => {

  galery.innerHTML = "";

  TagFilter().forEach((r) => {
    const card = cardFactory(r);
    galery.appendChild(card);
  });
};

export {
  SetTagRecipes,
  selectedIngredients,
  selectedAppareils,
  selectedUstensiles,
};
