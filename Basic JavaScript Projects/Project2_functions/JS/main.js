
function My_First_Function() { //Defining function name
    var str = "Red Text" //defining a string variable
    var result = str.fontcolor("red") //Assigning a colour to the string by using a variable
    document.getElementById("Red_Text").innerHTML = result; //Defining the id element on which the function will be used and assigning the varibale to it
}


function Function_2() { //Defining function name
    var str = "JavaScript"; //Defining a string variabale
    str += " is quite tricky"; //Previous string varibale continued; += used to concatenate the string
    document.getElementById("String").innerHTML = str; //Defining id element, assigning the concatenated string

}

function My_Function() { //Defining function name
    var A = "Welcome" //Definign string variable
    document.getElementById("paragraph").innerHTML = A //Assigning string variable to the relevant id
}





