//CONSTRUCTOR ARRAY
class LatestRecipes {
  constructor(recName, v, vG, gF) {
    this.name = recName;
    this.vegetarian = v;
    this.vegan = vG;
    this.glutenFree = gF;
  }
}

let latestRecipes = [
  new LatestRecipes("Triple Chocolate Cookies", true, false, false),
  new LatestRecipes("Classic Crepes", true, false, false),
  new LatestRecipes("Beef Stroganoff", false, false, true),
  new LatestRecipes("Maple & Pecan Roulade", true, false, true),
  new LatestRecipes("Vegan Tiramisu", true, true, false),
  new LatestRecipes("Perfect Roast Potatoes", true, true, true),
  new LatestRecipes("Butter Chicken", false, false, true),
  new LatestRecipes("Apple & Blackberry Crumble", true, false, true),
];

let currentRecipies = latestRecipes;

const recipeCarousel = function () {
  const container = document.querySelector(".container");

  if (!container) {
    return;
  }

  for (const recipe of currentRecipies) {
    const article = document.createElement("article");

    article.innerHTML = `<h2>${recipe.name}</h2><p>Article preview text here!</p>`;
    container.append(article);

    setTimeout(() => {
      article.classList.add("entered");
    }, 10);
  }
};

document.addEventListener("click", (event) => {
  if (!event.target.matches("button")) {
    return;
  }

  document.querySelectorAll("article").forEach((e) => e.remove());

  const current = event.target.id;
  console.log(current);
  currentRecipies = latestRecipes.filter(function (recipe) {
    if (recipe[current] || current === "allRecipes") {
      return recipe;
    } else {
    }
  });
  recipeCarousel();
});

recipeCarousel();
