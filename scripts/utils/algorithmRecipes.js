import { recipes } from "../../data/recipes.js";
import {
  selectedAppareils,
  selectedIngredients,
  selectedUstensiles,
} from "./tag.js";

/**
 Function : TagFilter
 
 * This function filters the recipes based on selected ingredients, appliances, and utensils.
 
 * @returns {Array} An array of filtered recipes.
 */

function TagFilter() {
  
  const filteredRecettes = recipes.filter((recette) => {
    return (
      selectedIngredients.every((ingredient) => {
        return recette.ingredients.some((recetteIngredient) => {
          return recetteIngredient.ingredient
            .toLowerCase()
            .includes(ingredient.toLowerCase());
        });
      }) &&
      selectedAppareils.every((appareil) => {
        return recette.appliance.toLowerCase().includes(appareil.toLowerCase());
      }) &&
      selectedUstensiles.every((ustensile) => {
        return recette.ustensils.some((recipeUstensil) => {
          return recipeUstensil.toLowerCase().includes(ustensile.toLowerCase());
        });
      })
    );
  });
  return filteredRecettes;
}

/**
 Function : searchFilter

 * Filters an array of recipe objects based on a search query.
 
 * @param {string} searchQuery - The search query to filter the recipes by.
 * @param {Array} recipes - An array of recipe objects to filter.
 * @returns {Array} An array of recipe objects that match the search query.
 */

const searchFilter = (searchQuery, recipes) => {
  const searchFilteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return searchFilteredRecipes;
}

export { TagFilter, searchFilter };
