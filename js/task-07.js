const inputFontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputFontSizeControl.addEventListener('input', fontControl);

function fontControl(event) {
   textSpan.style.fontSize = event.currentTarget.value + "px";
};