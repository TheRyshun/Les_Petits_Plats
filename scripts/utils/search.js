import { cardFactory } from "../factories/cardFactory.js";
import { TagFilter, searchFilter } from "./algorithmRecipes.js";

const searchInput = document.getElementById("search-input");
const searchButton = document.querySelector(".search-bar button");
const galery = document.querySelector("#galery");

/*
    Function : search
	
	* @param void 
	* @import : TagFilter / searchFilter 
	* @return {void}

    Function that handles the search feature.
    It listens to the click event of the search button,
    retrieves the search query value, filters the recipes
    based on the selected tags and the search query,
    and displays the filtered results on the page.
*/

const search = () => {
  searchButton.addEventListener("click", () => {
    var searchQuery = searchInput.value;
  
    const filteredRecipes = TagFilter();
  
    if (searchQuery.length >= 3) {
      const searchFilteredRecipes = searchFilter(searchQuery, filteredRecipes);
  
      galery.innerHTML = "";
      searchFilteredRecipes.forEach((r) => {
          const card = cardFactory(r);
          galery.appendChild(card);
      });
    } else {
      galery.innerHTML = "";
      filteredRecipes.forEach((r) => {
          const card = cardFactory(r);
          galery.appendChild(card);
      });
    }
  });
}

export {search}