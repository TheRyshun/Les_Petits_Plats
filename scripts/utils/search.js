import { recipes } from "../../data/recipes.js";
import { cardFactory } from "../factories/cardFactory.js";
import { TagFilter, searchFilter } from "./algorithmRecipes.js";
import {
  selectedAppareils,
  selectedIngredients,
  selectedUstensiles,
} from "./tag.js";

const searchInput = document.getElementById("search-input");
const searchButton = document.querySelector(".search-bar button");
const galery = document.querySelector("#galery");

const search = () => {
  var searchQuery = searchInput.value;
  const filteredRecipes = TagFilter();

  if (searchQuery.length >= 3) {
    const searchFilteredRecipes = searchFilter(searchQuery, filteredRecipes);

    galery.innerHTML = "";
    searchFilteredRecipes.forEach((r) => {
      const card = cardFactory(r);
      galery.appendChild(card);
    });
  } else if (
    selectedIngredients.length > 0 ||
    selectedAppareils.length > 0 ||
    selectedUstensiles.length > 0
  ) {
    const filterSearchRecipes = TagFilter();
    galery.innerHTML = "";
    filterSearchRecipes.forEach((r) => {
      const card = cardFactory(r);
      galery.appendChild(card);
    });
  } else {
    galery.innerHTML = "";
    recipes.forEach((r) => {
      const card = cardFactory(r);
      galery.appendChild(card);
    });
  }
};

searchButton.addEventListener("click", search);

export { search };
