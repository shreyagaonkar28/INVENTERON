function showMessage(type) {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("messagePage").style.display = "block";
    const output = document.getElementById("output");
    if (type === "arrow") {
        output.innerText = "This is an Arrow Function.";//It uses => syntax.
    } 
    else if (type === "parameter") {
        output.innerText = "function which demonstrates Parameters and Arguments.";
    } 
    else if (type === "return") {
        output.innerText = "function which uses the Return keyword to send back a value.";
    } 
    else if (type === "anonymous") {
        output.innerText = "Anonymous Function";//a function without a name
    } 
    else if (type === "callback") {
        output.innerText = "This is Callback Function";//a function passed as an argument
    }
}
function goBack() {
    document.getElementById("homePage").style.display = "block";
    document.getElementById("messagePage").style.display = "none";
}