const refs = {
  inputEl: document.querySelector("#validation-input"),

};

refs.inputEl.addEventListener("blur", checkInput);


function checkInput(event) {

    let inputVal = event.currentTarget.value;

    if (inputVal.length === Number(refs.inputEl.dataset.length)) {       
        
        refs.inputEl.classList.add("valid");
        refs.inputEl.classList.remove("invalid");
    }
    
    else if (inputVal.length === 0) {
           
        refs.inputEl.classList.remove("valid");
        refs.inputEl.classList.remove("invalid"); 
           
       }
        
    else {
        refs.inputEl.classList.remove("valid");
        refs.inputEl.classList.add("invalid");
    }
};



