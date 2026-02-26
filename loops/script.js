function forLoopDemo() {
    let text = "";
    for (let i = 1; i <= 5; i++) {
        text += i + " ";
    }
    document.getElementById("output").innerText = "For Loop: " + text;
}
function whileLoopDemo() {
    let i = 1;
    let text = "";
    while (i <= 5) {
        text += i + " ";
        i++;
    }
    document.getElementById("output").innerText = "While Loop: " + text;
}
function doWhileDemo() {
    let i = 1;
    let text = "";
    do {
        text += i + " ";
        i++;
    } while (i <= 5);

    document.getElementById("output").innerText = "Do While: " + text;
}
function forOfDemo() {
    let fruits = ["Apple", "Banana", "Mango"];
    let text = "";
    for (let fruit of fruits) {
        text += fruit + " ";
    }
    document.getElementById("output").innerText = "For Of: " + text;
}
function forInDemo() {
    let student = { name: "Shreya", age: 21, course: "CSE" };
    let text = "";
    for (let key in student) {
        text += key + ": " + student[key] + " | ";
    }
    document.getElementById("output").innerText = "For In: " + text;
}
function breakDemo() {
    let text = "";
    for (let i = 1; i <= 10; i++) {
        if (i == 5) break;
        text += i + " ";
    }
    document.getElementById("output").innerText = "Break: " + text;
}
function continueDemo() {
    let text = "";
    for (let i = 1; i <= 5; i++) {
        if (i == 3) continue;
        text += i + " ";
    }
    document.getElementById("output").innerText = "Continue Output: " + text;
}
function nestedLoopDemo() {
    let text = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            text += i + "," + j + " ";
        }
        text += "\n";
    }
    document.getElementById("output").innerText = "Nested Loop Output:\n" + text;
}