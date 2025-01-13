let generatedCaptcha = "";

// Function to generate random CAPTCHA
function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    generatedCaptcha = "";
    for (let i = 0; i < 6; i++) {
        generatedCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaBox").textContent = generatedCaptcha;
}

// Function to validate CAPTCHA input
function validateCaptcha() {
    const userInput = document.getElementById("captchaInput").value;
    const resultMessage = document.getElementById("resultMessage");

    if (userInput === generatedCaptcha) {
        resultMessage.textContent = "✅ CAPTCHA Verified!";
        resultMessage.style.color = "green";
        alert("Captcha Verified Successfully")
    } else {
        resultMessage.textContent = "❌ Incorrect CAPTCHA. Try Again!";
        resultMessage.style.color = "red";
        alert("Captcha Does not Match")
    }
}

// Generate CAPTCHA on page load
window.onload = generateCaptcha;