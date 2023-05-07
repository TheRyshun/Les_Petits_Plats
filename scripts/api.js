import { recipes } from "../data/recipes.js";

const getRecettes = () => {
    let data = [];

    recipes.forEach((r) => {
        let recipes = {
            id: r.id,
            name: r.name,
            ingredients: r.ingredients,
            time: r.time,
            description: r.description,
            appareils: r.appliance,
            ustensils: r.ustensils
        }

        data.push(recipes);
    })
    return data;
}
  
export { getRecettes };