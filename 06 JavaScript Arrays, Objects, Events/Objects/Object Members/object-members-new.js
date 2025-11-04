console.log("Hello!");

class Recipe {
    constructor(name, vegan, vegetarian, glutenFree){
        this.name = name;
        this.vegan = vegan;
        this.vegetarian = vegetarian;
        this.glutenFree = glutenFree;
    }
}

const latestRecipes = [
    new Recipe("Triple Chocolate Cookies", false, true, false),
    new Recipe("Classic Crepes", true, true, false),
    new Recipe("Mushroom Stroganoff", false, true, false),
    new Recipe("Maple & Pecan Roulade", true, true, false),
    new Recipe("Tiramisu", false, true, false),
    new Recipe("Perfect Roast Potatoes", false, true, false),
    new Recipe("Butter Chicken", true, true, false),
    new Recipe("Apple & Blackberry Crumble", false, true, false),
]

const createRecipeList = function() {

    const container = document.querySelector(".container");

    for (const recipe of latestRecipes) {
        const article = document.createElement("article");
        article.innerHTML = `<h3>${recipe.name}</h3>
        <p>${ recipe.vegan ? "Vegan" : "Not Vegan!"}</p>`;
        container.append(article);
    }

}

createRecipeList();

// console.log(latestRecipes);



