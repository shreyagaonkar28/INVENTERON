let firstSubmit = true;
let captcha = "";

function generateCaptcha() {
    captcha = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("captchaBox").innerText = captcha;
}

function handleSubmit() {
    if (firstSubmit) {
        document.getElementById("step2").style.display = "block";
        generateCaptcha();
        firstSubmit = false;
    } else {
        let userCaptcha = document.getElementById("captchaInput").value;

        if (userCaptcha == captcha) {
            alert("Submitted successfully");
        } else {
            alert("Invalid captcha");
            generateCaptcha(); 
        }
    }
    return false;
}