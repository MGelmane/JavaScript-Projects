
//FUNCTIONS USING A GLOBAL VARIABLE
var y = "Maya"; //Defining global variable with a string value

function Name1() { //Defining a function
    document.write("My name is " + y + "<br>"); //Output when the function is called
}

function Name2() { //Defining a function
    document.write("I was named " + y + " becuase that was my grandmothers name");//Output when the function is called
}


//FUNCTIONS USING A LOCAL VARIABLE 
function Name3() { //Defining a function
    var x = "Milo"; //Defining local variable and assigning string value to it
    document.write("My name is " + x);
}

function Name4() { //Defining a function
    document.write("I was named " + x + "because that was my fathers brothers name"); //This will not return a result; variable x not defined; dev tools return a message :Uncaught ReferenceError: x is not defined
}

console.log (Name4())



//TIME FUNCTION
function Time_function() { //Defining function
    var Time = new Date().getHours(); //Defining variable
    var Reply; //Defining variable
    if (Time < 12 == Time > 0) { //Comparing the var 'Time' with values 12 and 0.
        Reply = "It is morning time.";//If 'Time' less than 12 but greater than 0, display this message
    }

    else if (Time > 12 == Time < 18) { //Else if statement; comparing the var 'Time' with values 12 and 18
        Reply = "It is the afternoon.";//if 'Time' greater than 12 but less than 18, display this message
    }

    else {
        Reply = "It is evening time.";//Else statement. For any other values, display this message
    }
    document.getElementById("Time_of_day").innerHTML = Reply//Assigning id to var ''Reply', correct message will be displayed depending on which conditions have been met
}


//FUNCTION WITH AN IF STATEMENT
function Rainbow() { //Defining the function
    var color = document.getElementById("color").value //Assigning value to variable 'color', which is an undefined input value
    
    if (color == "red") //Defining 'if' statement; comparing input value with string 'red'
    {
        document.getElementById("answer1").innerHTML = "You are correct, " + color + " is the right answer"; // If input value equals string 'red',display this message
    }

    else {
        document.getElementById("answer1").innerHTML = "You are wrong, " + color + " is not the right answer"; //If input value is anything else than string 'red', display this message
    }
    

    
}
