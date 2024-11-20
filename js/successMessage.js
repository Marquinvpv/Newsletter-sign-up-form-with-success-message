const userEmail = localStorage.getItem("userEmail")
const dismissButton = document.querySelector(".success-button")

if(userEmail) {
    const successMessage = document.getElementById("success-message");
    successMessage.innerHTML = `A confirmation email has been sent to <strong>${userEmail}</strong>. Please open it and click the button inside to confirm your subscription.`;
}

dismissButton.addEventListener("click", () => {
    window.location.href = "../index/index.html"
})