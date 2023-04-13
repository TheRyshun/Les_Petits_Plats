import { recipes } from "../../data/recipes.js";
import { cardFactory } from "../factories/cardFactory.js";

const ingredients = document.querySelectorAll("#ingredientsList");
const appareils = document.querySelectorAll("#appareilsList");
const ustensiles = document.querySelectorAll("#ustensilesList");

let selectedIngredients = [];
let selectedAppareils = [];
let selectedUstensiles = [];

const galery = document.querySelector("#galery");

ingredients.forEach((ingredient) => {
  ingredient.addEventListener("click", (event) => {
    selectedIngredients.push(event.target.innerText);
    createTag(event.target.innerText, "ingredients");
    updateGallery();
  });
});

appareils.forEach((appareil) => {
  appareil.addEventListener("click", (event) => {
    selectedAppareils.push(event.target.innerText);
    createTag(event.target.innerText, "appareils");
    updateGallery();
  });
});

ustensiles.forEach((ustensile) => {
  ustensile.addEventListener("click", (event) => {
    selectedUstensiles.push(event.target.innerText);
    createTag(event.target.innerText, "ustensiles");
    updateGallery();
  });
});

function createTag(name, type) {
  //selectedAppareils.push(name.target.innerText);
  // Créer une carte HTML
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
  const cardCloseButton = document.createElement("button");
  const cardCloseIcon = document.createElement("i");
  cardCloseIcon.classList.add("fa-sharp", "fa-regular", "fa-circle-xmark");
  cardCloseButton.appendChild(cardCloseIcon);
  cardClose.appendChild(cardCloseButton);
  cardHeader.appendChild(cardClose);
  card.appendChild(cardHeader);

  const row = document.querySelector(".row");
  row.appendChild(card);
}

function updateGallery() {
  const filteredRecettes = recipes.filter((recette) => {
    // Vérifier si tous les ingrédients sélectionnés sont présents dans la recette
    return selectedIngredients.every((ingredient) => {
      return recette.ingredients.some((recetteIngredient) => {
        return recetteIngredient.ingredient.toLowerCase().includes(ingredient.toLowerCase());
      });
    });
  });
  const test = recipes.filter((recette) => {
    return selectedIngredients.every((appliance) => {
      return recette.appareils.some((recetteAppareil) => {
        return recetteAppareil.appareil.toLowerCase().includes(appliance.toLowerCase());
      })
    })
  });

  console.log(test);
  console.log(filteredRecettes);
  galery.innerHTML = "";
  filteredRecettes.forEach((r) => {
    const card = cardFactory(r);
    galery.appendChild(card);
  });
}

function reset() {
  const filteredRecettes = recipes.filter((recette) => {
    // Vérifier si tous les ingrédients sélectionnés sont présents dans la recette
    return selectedIngredients.every((ingredient) => {
      return recette.ingredients.some((recetteIngredient) => {
        return recetteIngredient.ingredient
          .toLowerCase()
          .includes(ingredient.toLowerCase());
      });
    });
  });
  galery.innerHTML = "";
  filteredRecettes.forEach((r) => {
    const card = cardFactory(r);
    galery.appendChild(card);
  });
}
