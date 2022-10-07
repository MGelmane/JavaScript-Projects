
function Your_Age() { //Defining the function
    var age = "" //Defining variable 'age', no value assigned at the moment
    var Number = 20; //Defining variable 'Number
     while //Start of'while' loop
        (Number > 0) { //Setting a condition; 
        age+= "<br>" + Number// This assigns value to variable 'age'
    document.getElementById("Loop").innerHTML = age//Assigning id and value to be displayed
        Number--;//Decrementing variable 'Number' by one 
    }
}

var Instruments = ["Guitar", "Drums", "Violin", "Bass", "Piano", "Flute", "Trumpet"] //Defining variable 'Instruments'
var Content = ""//Defining variable 'Content'; no value assigned at the moment
var Y; //Variable Y; to be used in the for loop
function for_Loop() {//Defining the 'for loop'
    for (Y = 0;  Y < Instruments.length; Y++) { //'for loop' conditions set out
        Content += Instruments[Y] + "<br>"//Assigning value to var 'Content
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;//Assigning ID and assigning value of the var 'Content' to be displayed in the browser
 }


function Fruit() { //Defining the function
    var fruit = []; //Defining var 'fruit', which will be an array of items
    fruit[0] = "apples"//Assigning value 'apples' to the array element with index 0
    fruit[1] = "pears" //Assigning value 'pears' to the array element with index 1
    fruit[2] = "tangerines" //Assigning value 'tangerines' to the array element with index 2
    fruit[3] = "grapes" //Assigning value 'grapes' to the array element with index 3
    fruit[4] = "bananas" //Assigning value 'bananas' to the array element with index 4
    document.getElementById("Array").innerHTML = "The 4th item in the shopping list are " + fruit[4] + " , just after " + fruit[3]//Assigning ID to text to be displayed; contains string element together with elemnts from the array
}
 
function dog() { //Defining the function

    let dog = "German Shephard"//Defining a variable 'dog' with key word 'let'; assigning value "German Shephard"
    let dog2 = "Cocker Spaniel" //Defining a variable 'dog2' with key word 'let'; assigning value "Cocker Spaniel"
    let dog3 = "Shar Pei" //Defining a variable 'dog3' with key word 'let'; assigning value "Shar Pei"

    document.getElementById("dog").innerHTML = "We have a " + dog + ", "  + dog2 + " and " + dog3 + " at home"// Assigning id;defining text to be displayed when function is called
    
    }
   