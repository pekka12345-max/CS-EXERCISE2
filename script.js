let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let squareVar= Math.pow(num1,num2);
let roundVar= Math.round(num1/num2);
let ceilVar= Math.ceil(num1/num2);
let floorVar= Math.floor(num1/num2);

document.write("<br>");
document.write("Your numbers are " + num1 + " and "+ num2);
document.write("<br>"+"<br>");
document.write(num1 + "^" + num2 + " is " + squareVar);
document.write("<br>");
document.write("round() of "+ num1 + "/" + num2 + " is " + roundVar);
document.write("<br>");
document.write("ceil() of "+ num1 + "/" + num2 + " is " + ceilVar);
document.write("<br>");
document.write("floor() of "+ num1 + "/" + num2 + " is " + floorVar);
document.write("<br>");

function promptText(){
    let string = "CAKE";
    let letter = String(prompt("Enter letter: "));
    let position = string.search(letter.toUpperCase());
    let length = string.length;


    if(position !== -1){
        let miniPos = position + 1;
        let th;

        if (miniPos === 1) th = "1st";
        else if (miniPos === 2) th = "2nd";
        else if (miniPos === 3) th = "3rd";
        else th = miniPos + "th";

        alert(
            letter + " is the " + th +
            " of the mystery word, which is composed of " +
            length + " letters!"
        );
    } else {
        alert(
            letter + " is not a letter of the mystery word, which is composed of " +
            length + " letters!"
        );
    }
}

function nameTyper(){
    let name= String(prompt("What is your name?"))
    if(name !== ""){
        alert("Your name is "+name.toUpperCase()+" (NOTE: I DO NOT KNOW HOW TO PRINT NEW TEXT WITHOUT DELETING THE ENTIRE THING");
    }else{
        let name= String(prompt("What is your name?"));
    }
}
