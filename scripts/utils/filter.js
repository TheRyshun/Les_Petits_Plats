import { getAppareils, getIngredients, getUstensils } from "./array.js";

const ingredientsInput = document.querySelector("#ingredients-input");
const ingredientsList = document.querySelector("#ingredientsList");

const appareilsInput = document.querySelector("#appliances-input");
const appareilsList = document.querySelector("#appareilsList");

const ustensilsInput = document.querySelector("#utensiles-input");
const ustensilsList = document.querySelector("#ustensilesList");


/* 
Function : filterIAU

 * @param void
 * @import : ingredientsInput, appareilsInput, ustensilsInput, getIngredients(), getAppareils(), getUstensils(), updateItemList()
 * @returns {void}
 
   Function that filters ingredients, appareils and ustensils based on user input
   and updates the corresponding lists on the page.
 */

const filterIAU = () => {
  ingredientsInput.addEventListener("input", () => {
    const searchText = ingredientsInput.value.toLowerCase();
    const filteredIngredients = getIngredients().filter((ingredient) =>
      ingredient.toLowerCase().includes(searchText)
    );
    updateItemList(filteredIngredients, ingredientsList);
  });

  appareilsInput.addEventListener("input", () => {
    const searchText = appareilsInput.value.toLowerCase();
    const filteredAppareils = getAppareils().filter((appareil) =>
      appareil.toLowerCase().includes(searchText)
    );
    updateItemList(filteredAppareils, appareilsList);
  });

  ustensilsInput.addEventListener("input", () => {
    const searchText = ustensilsInput.value.toLowerCase();
    const filteredUstensils = getUstensils().filter((ustensil) =>
      ustensil.toLowerCase().includes(searchText)
    );
    updateItemList(filteredUstensils, ustensilsList);
  });
};

/**
 * Update a given list with new items.
 *
 * @param {Array} items - The items to display in the list.
 * @param {HTMLElement} list - The list to update.
 * @returns {void}
 */

const updateItemList = (items, list) => {
  list.innerHTML = "";
  items.forEach((item) => {
      const button = document.createElement("p");
      button.classList.add("item");
      button.setAttribute("id-name", item);
      button.innerText = item;
      list.appendChild(button);
  });
};

export { filterIAU };
