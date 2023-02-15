const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    return output.textContent = event.currentTarget.value;
    
};
console.log(onInputChange());