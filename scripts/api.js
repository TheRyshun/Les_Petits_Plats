import { recipes } from "../data/recipes.js";

function getRecettes() {
    let data = [];

    recipes.forEach((r) => {
        let o = {
            id: r.id,
            name: r.name,
            ingredients: r.ingredients,
            time: r.time,
            description: r.description,
            appareils: r.appliance,
            ustensils: r.ustensils
        }

        data.push(o);
    })
    return data;
}
  
export { getRecettes };