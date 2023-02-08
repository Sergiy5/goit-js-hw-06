const numOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numOfCategories.length}`);


// Items

const firstItem = document.querySelector('.item');
// console.log(firstItem);

const secondItem = firstItem.nextElementSibling;
// console.log(secondItem);

const lastItem = secondItem.nextElementSibling;
// console.log(lastItem);



const firstTitle = firstItem.querySelector('h2');
console.log(`Category: ${firstTitle.textContent}`);

const countOfFirstEl = firstItem.querySelectorAll('li');
console.log(`Elements: ${countOfFirstEl.length}`);


const secondTitle = secondItem.querySelector('h2');
console.log(`Category: ${firstTitle.textContent}`);

const countOfSecondEl = secondItem.querySelectorAll('li');
console.log(`Elements: ${countOfSecondEl.length}`);


const lastTitle = lastItem.querySelector('h2');
console.log(`Category: ${firstTitle.textContent}`);

const countOfLastEl = lastItem.querySelectorAll('li');
console.log(`Elements: ${countOfLastEl.length}`);














