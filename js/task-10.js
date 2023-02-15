const input = document.querySelector('input')
const arrayBtns = document.querySelectorAll("button");
const newBoxes = document.querySelector("#boxes");
let amount;

// Func ColorRandom
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// Func InputLetNumber
 function onInputChange() {

 amount = input.value;
  //  console.log(amount);
   return amount;
};

// Func CreateBox
function createBoxes(amount) {
  const arrayOfEl = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const boxEl = document.createElement("div");
    boxEl.classList.add(".boxEl"); 
    boxEl.style.width = size + "px";
    boxEl.style.height = size + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
  
    arrayOfEl.push(boxEl);
  }
  return arrayOfEl;
};

const appendBoxes = () => newBoxes.append(...createBoxes(amount));
const removeBoxes = () => newBoxes.innerHTML ='';

input.addEventListener("input", onInputChange);
arrayBtns[0].addEventListener("click", appendBoxes);
arrayBtns[1].addEventListener("click", removeBoxes);



