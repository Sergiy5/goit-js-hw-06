const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange() {
        
    return input.value.length == 0
      ? (output.textContent = "Anonimus")
      : (output.textContent = input.value);
};