import { getRecipes } from "./recipes.mjs";

const cookieData = getRecipes();

console.log(cookieData);

function setCookieInfo(data) {
    console.log(data);
    const container = document.querySelector('.recipe-container');
    //multiple recipes so we loop through them with map
    const html = data.recipes.map(recipeTemplate);
    container.innerHTML = html.join("");
}
function recipeTemplate(info) {
    return `
    <div class="recipe">
      <h2>${info.recipe_name}</h2>
      <img src="${info.image}" alt="${info.notes}">
    </div>`;
}

function getType(data) {
    const cocoaContainer = document.querySelector('.cocoa');
    const trad = data.recipes.find((data) => data.type === 'traditional');
    
    document.querySelector('.traditional').innerHTML = trad.type;
}


setCookieInfo(cookieData);

getType(cookieData);
