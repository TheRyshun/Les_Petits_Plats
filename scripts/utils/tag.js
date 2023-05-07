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

This function allows you to manage click events on ingredients, appliances and utensils on the page. 
It adds the selected items to the appropriate tables and then updates the gallery accordingly.
@return {void} - This function returns no value.
*/

const SetTagRecipes = () =>{
  ingredients.forEach((ingredient) => {
    ingredient.addEventListener("click", (event) => {
      if (event.target.innerText.includes("\n")) {
        console.log("Choisir un ingrédient");
      } else {
        const name = event.target.innerText;
        if (!selectedIngredients.includes(name)) {
          selectedIngredients.push(name);
          createTag(name, "ingredients");
          updateGallery();
        } else {
          console.log("Déjà présent");
        }
      }
    });
  });

  appareils.forEach((appareil) => {
    appareil.addEventListener("click", (event) => {
      if (event.target.innerText.includes("\n")) {
        console.log("Choisir un appareil");
      } else {
        const name = event.target.innerText;
        if (!selectedAppareils.includes(name)) {
          selectedAppareils.push(name);
          createTag(name, "appareils");
          updateGallery();
        }
      }
    });
  });

  ustensiles.forEach((ustensile ) => {
    ustensile.addEventListener("click", (event) => {
      if (event.target.innerText.includes("\n")) {
        console.log("Choisir un ustensile");
      } else {
        const name = event.target.innerText;
        if (!selectedUstensiles.includes(name)) {
          selectedUstensiles.push(name);
          createTag(name, "ustensiles");
          updateGallery();
        }
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
 *  Function : removeTag
Deletes a given tag based on its name and type.
@param {string} name - The name of the tag to be deleted.
@param {string} type - The type of tag to be removed (ingredients, appliances, utensils).
@returns {void}
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

/**
  *  Function : updateGallery
Updates the map gallery with the filtered tags.
@returns {void}
*/
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
