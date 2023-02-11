let counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('.js-decrement-btn');
const tagCounter = document.querySelector('#counter');
const incrementBtn = tagCounter.lastElementChild;
// console.log(decrementBtn);

// console.log(calcNumber);


const decrementClic = () => { return --counterValue.textContent };
const incrementClic = () => { return ++counterValue.textContent };

decrementBtn.addEventListener('click', decrementClic);
incrementBtn.addEventListener('click', incrementClic);


