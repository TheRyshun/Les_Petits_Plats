import { recipes } from "../../data/recipes.js";

/**
Function : getRecettes

Returns an array of objects representing the recipes with the following information :

@property {number} id - The recipe ID.
@property {string} name - The name of the recipe.
@property {Array<string>} ingredients - The ingredients of the recipe as an array of strings.
@property {string} appareils - The equipment needed for the recipe.
@property {Array<string>} ustensils - The utensils needed for the recipe as an array of strings.
@returns {Array<object>} - A table of objects representing revenues.
*/
const getRecettes = () => {
    let data = [];

    recipes.forEach((r) => {
        let recipes = {
            id: r.id,
            name: r.name,
            ingredients: handleIngredient(r),
            appareils: handleUpperCase(r.appliance),
            ustensils: handleUstensils(r.ustensils)
        }
        data.push(recipes);
    })
    return data;
}

/**
Function : getIngredients

Returns an array of strings representing the ingredients of all recipes available in the database.
@returns {Array<string>} - An array of strings representing the ingredients.
*/
const getIngredients = () => {
    let data = [];
    recipes.forEach((r) => {
        r.ingredients.forEach((i) => {
            let ingredient = i.ingredient;
            ingredient = handleUpperCase(ingredient);
            data.push(ingredient);
        })

    })
    data = data.filter((item, index) => data.indexOf(item) === index);
    return data;
}

/**
Function : getAppareils

Returns a table containing all the devices used in the recipes available in the database, without duplicates.
@return {Array<string>} - An array of strings representing the devices.
*/

const getAppareils = () => {
    let data = [];
    recipes.forEach((r) => {
        data.push(r.appliance)
    })
    data = data.filter((item, index) => data.indexOf(item) === index);
    return data;
}

/**
Function : getUstensils

Returns a table containing all the utensils used in the recipes available in the database, without duplicates and with the first letter capitalized.
@return {Array<string>} - An array of strings representing the utensils.
*/

const getUstensils = () => {
    let data = [];
    recipes.forEach((r) => {
        r.ustensils.forEach((i) => {
            let firstLetter = i.charAt(0).toUpperCase();
            let restOfWord = i.slice(1);
            let capitalised = firstLetter + restOfWord;
            data.push(capitalised);
        })
    })
    data = data.filter((item, index) => data.indexOf(item) === index);
    return data;
}

const handleUpperCase = (str) => {
    let first = str.slice(0, 1);
    first = first.toUpperCase();
    let reste = str.slice(1);
    reste = reste.toLowerCase();

    str = first + reste;
    return str;
}

const handleUnit = (u) => {
    switch (u.unit) {
        case 'grammes':
            u.unit = 'g';
            break;
        case 'litres':
            u.unit = 'L';
            break;
        case 'cuillères à soupe':
            u.unit = 'càs';
            break;
        case 'cuillère à soupe':
            u.unit = 'càs';
            break;
        case 'cuillères à café':
            u.unit = 'càc';
            break;
        case 'cuillère à café':
            u.unit = 'càc';
            break;
        default:
            break
    }
    let quantity = u.quantity + ' ' + u.unit;
    return quantity;
}

/**
Fonction : handleIngredient

Takes a recipe object as a parameter and returns an array of objects that contains information about the ingredients of the recipe.
@param {object} r - An object representing a recipe.
@return {Array<object>} - A table of objects representing the ingredients of the recipe.
*/

const handleIngredient = (r) => {
    let data = [];
    r.ingredients.forEach((i) => {
        if (i.unit) {
            let quantity = handleUnit(i);
            data.push([handleUpperCase(i.ingredient), quantity]);
        } else if (i.quantity && !i.unit) {
            data.push([handleUpperCase(i.ingredient), i.quantity]);
        } else {
            data.push([handleUpperCase(i.ingredient)]);
        }
    })
    return data;
}

/**
Fonction : handleUstensils

Takes an array of utensils as a parameter and returns an array of capitalised utensils.
@param {Array<string>} u - An array of strings representing the utensils.
@return {Array<string>} - An array of strings representing the capitalized utensils.
*/

const handleUstensils = (u) => {
    let arr = [];
    u.forEach((u) => {
        u = handleUpperCase(u);
        arr.push(u);
    })
    return arr;
}

getRecettes();

export { getRecettes, getIngredients, getAppareils, getUstensils }