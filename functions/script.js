function showMessage(type) {
    const output = document.getElementById("output");
    if (type === "arrow") {
        output.innerText = "Arrow Function"//It uses => syntax;
    } 
    else if (type === "parameter") {
        output.innerText = "function which demonstrates Parameters and Arguments.";
    } 
    else if (type === "return") {
        output.innerText = "function which uses the Return keyword to send back a value";
    } 
    else if (type === "anonymous") {
        output.innerText = "Anonymous Function";//function without a name"
    } 
    else if (type === "callback") {
        output.innerText = "Callback Function"; //a function passed as an argument.
    }
}