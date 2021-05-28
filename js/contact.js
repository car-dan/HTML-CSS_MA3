
const form = document.querySelector("#contactForm");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const validation = document.querySelector(".validation");
const button = document.querySelector(".button");



function validateForm(event) {
    event.preventDefault();

    if (validateEmail (email.value)) {
        emailError.style.display = "none";
        email.classList.add("valid");
    }
    else {
        emailError.style.display = "block"
        email.classList.remove("valid");
    }
    if (message.value.trim().length > 10) {
        messageError.style.display = "none";
        message.classList.add("valid");
    }
    else {
        messageError.style.display = "block";
        message.classList.remove("valid");
    }
  
     button.addEventListener("click", formValidateMessage);
}

form.addEventListener("click", validateForm);



function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function formValidateMessage() {
    if (email.className === "form__input valid") {
        validation.style.display = "block";
        form.style.display = "none"
        console.log("test")
    }
    else {
        validation.style.display = "none";
        console.log("test2")
    }
}
