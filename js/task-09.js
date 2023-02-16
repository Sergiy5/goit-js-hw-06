
const nameColorInSpan = document.querySelector('.color');
const btnChangeColor = document.querySelector(".change-color");
const bodyClass = document.querySelector("body");

btnChangeColor.addEventListener("click", getRandomHexColor);


    function getRandomHexColor() {
  
    const randomColor = `#${Math.floor( Math.random() * 16777215 )
    .toString(16)
      .padStart(6, 0)}`;
      bodyClass.style.backgroundColor = randomColor;
      nameColorInSpan.textContent = bodyClass.style.backgroundColor;
      return randomColor;
};