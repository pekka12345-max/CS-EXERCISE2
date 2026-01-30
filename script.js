// Get first number
let num1 = Number(prompt("Enter the first number:"));
// Get second number
let num2 = Number(prompt("Enter the second number:"));

// Calculate power
let squareVar = Math.pow(num1, num2);
// Round division
let roundVar = Math.round(num1 / num2);
// Ceiling division
let ceilVar = Math.ceil(num1 / num2);
// Floor division
let floorVar = Math.floor(num1 / num2);

// Show numbers
document.write("<br>");
document.write("Your numbers are " + num1 + " and " + num2);
document.write("<br><br>");
// Show power result
document.write(num1 + "^" + num2 + " is " + squareVar);
document.write("<br>");
// Show rounded result
document.write("round() of " + num1 + "/" + num2 + " is " + roundVar);
document.write("<br>");
// Show ceiling result
document.write("ceil() of " + num1 + "/" + num2 + " is " + ceilVar);
document.write("<br>");
// Show floor result
document.write("floor() of " + num1 + "/" + num2 + " is " + floorVar);
document.write("<br>");

// Letter guessing function
function promptText() {
    let string = "CAKE"; // Mystery word
    let letter = String(prompt("Enter letter: ")); // Get letter
    let position = string.search(letter.toUpperCase()); // Find position
    let length = string.length; // Word length

    if (position !== -1) { // Letter found
        let miniPos = position + 1; // Human-readable
        let th;

        // Set ordinal
        if (miniPos === 1) th = "1st";
        else if (miniPos === 2) th = "2nd";
        else if (miniPos === 3) th = "3rd";
        else th = miniPos + "th";

        alert(
            letter + " is the " + th +
            " of the mystery word, which is composed of " +
            length + " letters!"
        );
    } else { // Letter not found
        alert(
            letter + " is not a letter of the mystery word, which is composed of " +
            length + " letters!"
        );
    }
}

// Ask for user's name
function nameTyper() {
    let name = String(prompt("What is your name?")); // Get name
    if (name !== "") { // Name entered
        alert(
            "Your name is " + name.toUpperCase() +
            " (NOTE: I DO NOT KNOW HOW TO PRINT NEW TEXT WITHOUT DELETING THE ENTIRE THING"
        );
    } else { // Name empty
        let name = String(prompt("What is your name?"));
    }
}
