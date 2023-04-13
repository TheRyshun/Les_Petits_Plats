import { recipes } from "../../data/recipes.js";
import {
  selectedAppareils,
  selectedIngredients,
  selectedUstensiles,
} from "./tag.js";

function selectMethodFilter() {
  // Method tableau
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
export { selectMethodFilter };
