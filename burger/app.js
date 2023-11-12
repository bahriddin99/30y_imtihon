function addIngredient(type) {
  const ingredient = document.createElement("div");
  ingredient.className = "ingredient " + type;

  if (type === "meat") {
    ingredient.style.width = "80%";
    ingredient.style.left = "10%";
  } else if (type === "onion") {
    ingredient.style.width = "70%";
    ingredient.style.left = "15%";
  } else if (type === "cheese") {
    ingredient.style.width = "80%";
    ingredient.style.left = "10%";
  } else if (type === "pickle") {
    ingredient.style.width = "90%";
    ingredient.style.left = "5%";
  } else if (type === "tomato") {
    ingredient.style.width = "60%";
    ingredient.style.left = "20%";
  }

  document.getElementById("burger").appendChild(ingredient);
}
