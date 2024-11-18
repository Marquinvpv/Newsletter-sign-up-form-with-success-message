class EmailValidator {
    constructor(email) {
        this.email = email
    }

    isEmpty() {
        return this.email === "";
    }

    isValid() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

    static validationInput(inputElement) {
        const emailValidator = new EmailValidator(inputElement.value);
        let errorMessage = inputElement.nextElementSibling;

        inputElement.classList.remove("input-error");
        if (errorMessage && errorMessage.classList.contains("error-message")) {
            errorMessage.textContent = "";
            errorMessage.classList.remove("active");
        }

        if(!emailValidator.isEmpty() && emailValidator.isValid()) {
            console.log("Email valid");
            return true;
        } else {
            console.log("Invalid email!")
            inputElement.classList.add("input-error");

            if (!errorMessage || !errorMessage.classList.contains("error-message")) {
                errorMessage = document.createElement("span");
                errorMessage.classList.add("error-message");
                inputElement.insertAdjacentElement("afterend", errorMessage);
            }
            
            errorMessage.textContent = "Valid email required!";
            errorMessage.classList.add("active");
            
            return false;
        }
    }
}

const emailInput = document.getElementById("email");
const validateButton = document.getElementById("button-validator");

validateButton.addEventListener("click", (event) => {
    event.preventDefault();
    EmailValidator.validationInput(emailInput);
});