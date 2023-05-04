import { recipes } from "../../data/recipes.js";
import {
  selectedAppareils,
  selectedIngredients,
  selectedUstensiles,
} from "./tag.js";
const searchInput = document.getElementById("search-input");

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
      }) &&
      recette.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  });
  return filteredRecettes;
}

const searchFilter = (searchQuery, recipes) => {
  const searchFilteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return searchFilteredRecipes;
};

export { TagFilter, searchFilter };
