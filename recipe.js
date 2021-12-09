"use strict";

// Start of recipe data
const recipeData = [
  //Recipe1 data
  {
    id: 1,
    image: "./Recipe_image/recipe1.jpg",
    name: "Avacado Salad",
    badge1: "Vegan",
    badge2: "PULAO",
    calories: 400,
    nutrition: 92,
    rating: 4.8,
    totalReviews: "(441)",
    diet: [
      " Vegeterian",
      " vegan",
      " Pescaterian",
      " Lactose-Free",
      " Carnivore",
      " Mediterranean",
    ],
  },
  //Recipe2 data
  {
    id: 2,
    image: "./Recipe_image/recipe2.jpg",
    name: " Cheesy Tomato Pasta",
    badge1: "Gnocchi",
    badge2: "Mozzarella",
    calories: 450,
    nutrition: 98,
    rating: 4.4,
    totalReviews: "(421)",
    diet: [
      " Pescaterian",
      " Kid-Freindly",
      " Keto",
      " Paleo",
      " Low-FODMAP",
      " Vegeterian",
      " vegan",
    ],
  },
  //Recipe3 data
  {
    id: 3,
    image: "./Recipe_image/recipe3.png",
    name: "Mandarin Orange Salad",
    badge1: "Spinach",
    badge2: "Arugula",
    calories: 433,
    nutrition: 88,
    rating: 4.1,
    totalReviews: "(345)",
    diet: [
      " Low-Carb",
      " Pescaterian",
      " Kid-Freindly",
      " Vegeterian",
      " vegan",
      " Dukan",
    ],
  },
  //Recipe4 data
  {
    id: 4,
    image: "./Recipe_image/recipe4.png",
    name: "Homemade Salsa",
    badge1: "Jalapeños",
    badge2: "Cherry",
    calories: 384,
    nutrition: 93,
    rating: 3.9,
    totalReviews: "(369)",
    diet: [
      " Ultra-Low-Fat",
      " Atkins",
      " Low-Carb",
      " Pescaterian",
      " vegan",
      " Dukan",
    ],
  },
  //Recipe5 data
  {
    id: 5,
    image: "./Recipe_image/recipe5.png",
    name: "Classic Bruschetta",
    badge1: "Baguette",
    badge2: "Olive",
    calories: 361,
    nutrition: 82,
    rating: 4.0,
    totalReviews: "(377)",
    diet: [
      " HCG",
      " Intermittent Fasting",
      " Ultra-Low-Fat",
      " Atkins",
      " Low-Carb",
      " Pescaterian",
      " vegan",
      " Dukan",
    ],
  },
  //Recipe6 data
  {
    id: 6,
    image: "./Recipe_image/recipe6.jpg",
    name: "Hot Crab Dip",
    badge1: "Cheese",
    badge2: "Parmesan",
    calories: 360,
    nutrition: 75,
    rating: 4.5,
    totalReviews: "(381)",
    diet: [
      " South Beach",
      " Low-carbohydrate",
      " Intermittent Fasting",
      " Ultra-Low-Fat",
      " Atkins",
      " vegan",
    ],
  },
];
// End of Recipe Data

// Mapping each recipe of recipeData and assigning data into html file using query selector of class name
//for eg: for recipe1 classname of image is 'recipe1_img' and id from recipeData is also '1'
// so, 'recipe' + rec.id + '_img' ===  'recipe1_img' where rec.id is 1;
recipeData.map((rec) => {
  document.querySelector(".recipe" + rec.id + "_img").src = rec.image; //Assigning image path in src of each recipe

  document.querySelector(".recipe" + rec.id + "_name").textContent = rec.name; //Assigning name value in textContent of each recipe

  document.querySelector(".recipe" + rec.id + "_badge1").textContent = //Assigning badge1 value in textContent of each recipe
    rec.badge1;

  document.querySelector(".recipe" + rec.id + "_badge2").textContent =
    rec.badge2;

  document.querySelector(".recipe" + rec.id + "_calo").textContent =
    rec.calories;

  document.querySelector(".recipe" + rec.id + "_nutri").textContent =
    rec.nutrition;

  document.querySelector(".recipe" + rec.id + "_rate").textContent = rec.rating;

  document.querySelector(".recipe" + rec.id + "_totalReview").textContent =
    rec.totalReviews;

  //this mapping is for  diet of each recipe  as diet is of array form of each recipe.

  let nodes = rec.diet.map((list) => {
    let para1 = document.createElement("div");
    let para2 = document.createElement("i");
    let node = document.createTextNode(list);
    para2.classList.add("fa");
    para2.classList.add("fa-check");
    para2.setAttribute("aria-hidden", "true");
    para1.appendChild(para2);
    para1.appendChild(node);

    return para1;
  });

  document.querySelector(".recipe" + rec.id + "_diet").append(...nodes); //Appending html elements and diet values i.e, nodes
  //in diet list using spread operator
});
