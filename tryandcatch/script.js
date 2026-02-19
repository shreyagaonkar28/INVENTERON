function checkNumber() {
    try {
        let value = document.getElementById("num").value;
        if (value === "") {
            throw "Input cannot be empty";
        }
        if (isNaN(value)) {
            throw "Please enter a valid number";
        }
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Valid number: " + value;
    }
    catch (error){
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = error;
    }
}
