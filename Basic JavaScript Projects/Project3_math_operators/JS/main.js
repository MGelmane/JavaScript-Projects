
function addition_Function() { //Defining an addition function
    var addition = 1240+1275; //Assigning values to variable addition
    document.getElementById("Math").innerHTML = "1240+1275=" + addition; //Defining the id and text that should be displayed
}

function substract_Function() { //Defining a substraction function
    var substract = 550-257; //Assigning values to variable substract
    document.getElementById("Substract").innerHTML = "550-257=" + substract; //Defining the id and text that should be displayed
}

function divide_Function() { //Defining a division function
    var divide = 1185 / 5; //Assigning values to varibale divide
    document.getElementById("divide").innerHTML = "Correct answer is " + divide; //Defining the id and text that should be displayed
}

function multiply_Function() { //Defining a multiplication function
    var multiply = 74*58; //Assigning values to variable multiply
    document.getElementById("multiply").innerHTML = "Correct answer is " + multiply; //Defining the id and text that should be displayed
}

function operations() { //Defining a multiple operation function
    var op = (237 + 4292) * (2515 / 293) //Assigning values to variable op
    document.getElementById("operation").innerHTML = "Answer is " + Math.round(op); //Defining the id and text that should be displayed , rounding the number to closest integer by Math.round
}

function modulus() { //Defining a function that returns a remainder
    var remainder = 4292 % 237; // Assigning values to variable remainder
    document.getElementById("rem").innerHTML = "Remainder is " + remainder //Defining the id and the value that should be be displayed 
}

function negation_op() { //Defining a function that returns an opposite value
    var y = 60; // Assigning value to variable y
    document.getElementById("math").innerHTML = -y; //Defining the id where the opposite value of y should appear
}

var Z = 25; //Assigning value to variable Z
Z++; //Incrementing variable Z
var Y = 15.5; //Assigning value to variable Y
Y-- //Decrementing variable Y
document.write("Incremented value is " + Z + " and " + "decremented value is " + Y); // Text to be displayed in HTML file


function random_number() { //Defining a function that returns a random number
    var A = (Math.random() * 20); //Defining a varibale which can be any number between 0-20
    document.getElementById("random_number_button").innerHTML = A //Defining the id where the returned value should appear
}




