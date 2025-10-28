function LatestRecipe(name, isVegetarian, isVegan, isGlutenFree ) {
    this.name = name;
    this.vegetarian = isVegetarian;
    this.vegan = isVegan;
    this.glutenFree = isGlutenFree;
}

const latestRecipes = [
    new LatestRecipe("Triple Chocolate Cookies", true, false, false),
    new LatestRecipe("Classic Crepes", true, false, false ),
    new LatestRecipe("Beef Stroganoff", false, false, true),
    new LatestRecipe("Maple & Pecan Roulade", true, false, true),
    new LatestRecipe("Vegan Tiramisu", true, true, false),
    new LatestRecipe("Perfect Roast Potatoes", true, true, true),
    new LatestRecipe("Butter Chicken", false, false, true),
    new LatestRecipe("Apple & Blackberry Crumble", true, false, true),
]

const currentRecipes = latestRecipes;

const recipeList = function() {

    const container = document.querySelector(".container");

    for(const recipe of currentRecipes) {
        const article = document.createElement("article");
        article.innerHTML = `<h2>${recipe.name}</h2>`
    }

}

console.log(currentRecipes);

