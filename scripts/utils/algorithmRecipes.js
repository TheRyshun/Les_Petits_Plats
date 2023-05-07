import { recipes } from "../../data/recipes.js";
import {
  selectedAppareils,
  selectedIngredients,
  selectedUstensiles,
} from "./tag.js";
const searchInput = document.getElementById("search-input");

/**
Function : TagFilter
Filters recipes according to the selected ingredients, appliances and utensils.
@returns {array} filteredRecettes - Filtered recipes.
*/

const TagFilter = () => {
  const filteredRecettes = [];
  for (let i = 0; i < recipes.length; i++) {
    let recette = recipes[i];
    let selectedIngredientsMatch = true;
    for (let j = 0; j < selectedIngredients.length; j++) {
      let ingredient = selectedIngredients[j];
      let recetteIngredientMatch = false;
      for (let k = 0; k < recette.ingredients.length; k++) {
        let recetteIngredient = recette.ingredients[k].ingredient.toLowerCase();
        if (recetteIngredient.includes(ingredient.toLowerCase())) {
          recetteIngredientMatch = true;
          break;
        }
      }
      if (!recetteIngredientMatch) {
        selectedIngredientsMatch = false;
        break;
      }
    }

    let selectedAppareilsMatch = true;
    for (let j = 0; j < selectedAppareils.length; j++) {
      let appareil = selectedAppareils[j];
      if (!recette.appliance.toLowerCase().includes(appareil.toLowerCase())) {
        selectedAppareilsMatch = false;
        break;
      }
    }

    let selectedUstensilesMatch = true;
    for (let j = 0; j < selectedUstensiles.length; j++) {
      let ustensile = selectedUstensiles[j];
      let recipeUstensilMatch = false;
      for (let k = 0; k < recette.ustensils.length; k++) {
        let recipeUstensil = recette.ustensils[k].toLowerCase();
        if (recipeUstensil.includes(ustensile.toLowerCase())) {
          recipeUstensilMatch = true;
          break;
        }
      }
      if (!recipeUstensilMatch) {
        selectedUstensilesMatch = false;
        break;
      }
    }

    if (
      selectedIngredientsMatch &&
      selectedAppareilsMatch &&
      selectedUstensilesMatch &&
      recette.name.toLowerCase().includes(searchInput.value.toLowerCase())
    ) {
      filteredRecettes.push(recette);
    }
  }
  return filteredRecettes;
}

/**
Function : searchFilter
Filters recipes according to the search query.
@param {string} searchQuery - The search query.
@param {array} recipes - The list of recipes to be filtered.
@returns {array} searchFilteredRecipes - Recipes filtered by search.
*/

const searchFilter = (searchQuery, recipes) => {
  const searchFilteredRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    if (recipe.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      searchFilteredRecipes.push(recipe);
    }
  }

  return searchFilteredRecipes;
};

export { TagFilter, searchFilter };
