let valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('.js-decrement-btn');
const tagCounter = document.querySelector('#counter');
const incrementBtn = tagCounter.lastElementChild;
// console.log(decrementBtn);

// console.log(calcNumber);
let counterValue = 0;

const decrementClic = () => { return valueEl.textContent = --counterValue };
const incrementClic = () => { return valueEl.textContent = ++counterValue };

decrementBtn.addEventListener('click', decrementClic);
incrementBtn.addEventListener('click', incrementClic);

