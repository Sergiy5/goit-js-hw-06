const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(eventChange) {
    return output.textContent = eventChange.currentTarget.value;
};
console.log(onInputChange());