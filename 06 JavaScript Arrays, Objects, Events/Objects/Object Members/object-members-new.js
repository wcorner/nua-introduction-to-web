class Recipe {
    constructor(name, isVegetarian, isVegan, isGlutenFree) {
        this.name = name;
        this.vegetarian = isVegetarian;
        this.vegan = isVegan;
        this.glutenFree = isGlutenFree;
    }
}

const latestRecipes = [
    new Recipe("Triple Chocolate Cookies", true, false, false),
    new Recipe("Classic Crepes", true, false, false ),
    new Recipe("Beef Stroganoff", false, false, true),
    new Recipe("Maple & Pecan Roulade", true, false, true),
    new Recipe("Vegan Tiramisu", true, true, false),
    new Recipe("Perfect Roast Potatoes", true, true, true),
    new Recipe("Butter Chicken", false, false, true),
    new Recipe("Apple & Blackberry Crumble", true, false, true),
]

const currentRecipes = latestRecipes;

const recipeList = function() {

    const container = document.querySelector(".container");

    for(const recipe of currentRecipes) {
        const article = document.createElement("article");
        article.innerHTML = `<h3>${recipe.name}</h3><p>Recipe description</p>`
        container.append(article);
    }

}

recipeList();

