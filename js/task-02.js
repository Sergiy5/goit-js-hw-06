const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const makeList = () => ingredients.map(ingredient => {

  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});

ingredientsList.append(...makeList());
