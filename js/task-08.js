const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
      alert(`Будь ласка, заповніть усі поля`);
      
    } else {
      const formElements = event.currentTarget.elements;
      const email = formElements.email.value;
      const password = formElements.password.value;

      const formData = {
        email,
        password,
      };
      console.log(formData);
    };
  
  form.reset();
};

