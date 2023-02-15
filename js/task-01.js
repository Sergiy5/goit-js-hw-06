const categories = document.querySelectorAll(".item");
const namesCategories = document.querySelectorAll('h2');

console.log(`Number of categories: ${categories.length}`);
console.log(numberOfCategories);
// Items

const firstItem = document.querySelector(".item");
// console.log(firstItem);
// categories[0];

const secondItem = firstItem.nextElementSibling;
// console.log(secondItem);
// categories[1];

const lastItem = secondItem.nextElementSibling;
// console.log(lastItem);
// categories[2];

// function nameAndNumberOfCategory(nameOfCategory) {
for (let i = 0; i < namesCategories.length; i += 1) {
        
    console.log((`Category: ${namesCategories[i].textContent}`));
    
        console.log(
          `Elements: ${namesCategories[i].querySelector("li").length}`
        );
    }
// }
// nameAndNumberOfCategory(namesCategories);

// const firstTitle = firstItem.querySelector("h2");
// console.log(`Category: ${firstTitle.textContent}`);

// const countOfFirstEl = firstItem.querySelectorAll("li");
// console.log(`Elements: ${countOfFirstEl.length}`);

// const secondTitle = secondItem.querySelector("h2");
// console.log(`Category: ${firstTitle.textContent}`);

// const countOfSecondEl = secondItem.querySelectorAll("li");
// console.log(`Elements: ${countOfSecondEl.length}`);

// const lastTitle = lastItem.querySelector("h2");
// console.log(`Category: ${firstTitle.textContent}`);

// const countOfLastEl = lastItem.querySelectorAll("li");
// console.log(`Elements: ${countOfLastEl.length}`);
