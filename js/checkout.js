const form = document.querySelector("#paymentForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#errorFirstName");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#errorlastName");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#errorAdress");
const city = document.querySelector("#city");
const cityError = document.querySelector("#errorCity");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#errorZip");
const country = document.querySelector("#country");
const countryError = document.querySelector("#errorCountry");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#errorCardNumber");
const button = document.querySelector(".button");
const validation = document.querySelector(".validation");



function validateForm(event) {
    event.preventDefault();

    if (checkLengt(firstName.value, 1)) {
        firstName.classList.add("valid");
        firstNameError.style.display = "none";
        
    }
    else {
        firstName.classList.remove("valid");
        firstNameError.style.display = "block";
    }
    if (checkLengt(lastName.value, 1)) {
        lastName.classList.add("valid");
        lastNameError.style.display = "none";
        
    }
    else {
        lastName.classList.remove("valid");
        lastNameError.style.display = "block";
    }
    if (checkLengt(adress.value, 5)) {
        adress.classList.add("valid");
        adressError.style.display = "none";
        
    }
    else {
        adress.classList.remove("valid");
        adressError.style.display = "block";
    }
    if (checkLengt(city.value, 1)) {
        city.classList.add("valid");
        cityError.style.display = "none";
        
    }
    else {
        city.classList.remove("valid");
        cityError.style.display = "block";
    }
    if (checkLengt(zip.value, 3)) {
        zip.classList.add("valid");
        zipError.style.display = "none";
        
    }
    else {
        zip.classList.remove("valid");
        zipError.style.display = "block";
    }
    if (checkLengt(country.value, 3)) {
        country.classList.add("valid");
        countryError.style.display = "none";
        
    }
    else {
        zip.classList.remove("valid");
        zipError.style.display = "block";
    }
    if (checkLengt(cardNumber.value, 11)) {
        cardNumber.classList.add("valid");
        cardNumberError.style.display = "none";
        
    }
    else {
        cardNumber.classList.remove("valid");
        cardNumberError.style.display = "block";
    }
    submittForm();
    button.addEventListener("click", formsuccsess);
}

form.addEventListener("click", validateForm);



function checkLengt(value, len) {
    if (value.trim().length > len) {
        return true; 
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function submittForm() {
    if (firstName.className === "paymentFormInput valid" && lastName.className === "paymentFormInput valid" && adress.className === "paymentFormInput valid" && city.className === "paymentFormInput valid" && zip.className === "paymentFormInput valid" && country.className === "paymentFormInput valid" && cardNumber.className === "paymentFormInput valid"  )
    {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}


function formsuccsess() {
    validation.style.display = "block";
    form.style.display = "none";
}
    