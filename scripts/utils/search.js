import { recipes } from "../../data/recipes.js";
import { cardFactory } from "../factories/cardFactory.js";
import { TagFilter, searchFilter } from "./algorithmRecipes.js";
import {
  selectedAppareils,
  selectedIngredients,
  selectedUstensiles,
} from "./tag.js";

const searchInput = document.getElementById("search-input");
const galery = document.querySelector("#galery");

const search = () => {
  const searchQuery = searchInput.value;
  const filteredRecipes = TagFilter();

  if (searchQuery.length >= 3 && selectedIngredients.length <= 0) {
    const searchFilteredRecipes = searchFilter(searchQuery, filteredRecipes);

    galery.innerHTML = "";
    searchFilteredRecipes.forEach((r) => {
      const card = cardFactory(r);
      galery.appendChild(card);
    });
  }
  if (
    (selectedIngredients.length > 0 ||
      selectedAppareils.length > 0 ||
      selectedUstensiles.length > 0) &&
      searchQuery.length >= 3
  ) {
    galery.innerHTML = "";
    filteredRecipes.forEach((r) => {
      const card = cardFactory(r);
      galery.appendChild(card);
    });
  }

  if (
    (selectedIngredients.length > 0 ||
      selectedAppareils.length > 0 ||
      selectedUstensiles.length > 0) &&
      searchQuery.length == 0
  ) {
    galery.innerHTML = "";
    filteredRecipes.forEach((r) => {
      const card = cardFactory(r);
      galery.appendChild(card);
    });
  }
  if (
    searchQuery.length === 0 &&
    selectedIngredients.length <= 0 &&
    selectedAppareils.length <= 0 &&
    selectedUstensiles.length <= 0
  ) {
    galery.innerHTML = "";
    recipes.forEach((r) => {
      const card = cardFactory(r);
      galery.appendChild(card);
    });
  }
};
searchInput.addEventListener("input", search);
export { search };
