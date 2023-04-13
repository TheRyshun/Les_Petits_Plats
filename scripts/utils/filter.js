import { getAppareils, getIngredients, getUstensils } from "./array.js";

const ingredientsInput = document.querySelector("#ingredients-input");
const ingredientsList = document.querySelector("#ingredientsList");

const appareilsInput = document.querySelector("#appliances-input");
const appareilsList = document.querySelector("#appareilsList");

const ustensilsInput = document.querySelector("#utensiles-input");
const ustensilsList = document.querySelector("#ustensilesList");

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
