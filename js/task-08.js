const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    event.preventDefault();

    for (let input of inputs) {
        
        if (input.value <= 0) {

            alert(`Будь ласка, заповніть усі поля`);
            break;
        }
        else if (input.value > 0) {

          const formElements = event.currentTarget.elements;
          const email = formElements.email.value;
          const password = formElements.password.value;

          const formData = {
            email,
            password,
          };
          console.log(formData);
        }     
    }
    form.reset();
}


