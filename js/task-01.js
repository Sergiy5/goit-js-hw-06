const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i += 1) {

    console.log(`Category: ${categories[i].firstElementChild.textContent}`);

    const arrLength = categories[i].lastElementChild;
    
    console.log(`Elements: ${arrLength.querySelectorAll('li').length}`);
};