const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const item1 = document.createElement("li");
item1.textContent = 'Potatoes';
item1.classList = 'item';

const item2 = document.createElement("li");
item2.textContent = 'Mushrooms';
item2.classList = 'item';

const item3 = document.createElement("li");
item3.textContent = 'Garlic';
item3.classList = 'item';

const item4 = document.createElement("li");
item4.textContent = 'Tomatos';
item4.classList = 'item';

const item5 = document.createElement("li");
item5.textContent = 'Herbs';
item5.classList = 'item';

const item6 = document.createElement("li");
item6.textContent = 'Condiments';
item6.classList = 'item';

const ingradientsList = document.querySelector('#ingredients');

ingradientsList.append(item1, item2, item3, item4, item5, item6);

console.log(ingradientsList);