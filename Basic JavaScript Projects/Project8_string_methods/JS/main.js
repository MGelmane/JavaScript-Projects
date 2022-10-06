
//CONCAT() METHOD
function Sentence() { //Defining function
    var P1 = "This now "; //Defining var P1; 1st part of the string
    var P2 = " is made "; //Defining var P2; 2nd part of the string
    var P3 = "into a "; //Defining var P3; 3rd part of the string
    var P4 = " full "; //Defining var P4; 4th part of the string
    var P5 = " sentence" //Defining var P5; 5th part of the string
    var Whole = P1.concat(P2, P3, P4, P5) //Concatenating all variables into one single string
    document.getElementById("Concatenate").innerHTML = Whole; //Defining id and assigning var 'Whole' to be displayed when the function is called
}

//SLICE METHOD
function Slice() { //Defining the function
    var Full = "My favourite color is black and I do not like yellow"; //Assigning a string value to var; this will be the ful sentence
    var Part = Full.slice(22, 28); //Defining places where the string should be cut and which characters will be kept
    var Part2 = Full.slice(46, 53); //Defining places where the string should be cut and which characters will be kept
    document.getElementById("slice_string").innerHTML = Part + " and " + Part2; //Assigning id and assigning the value of both parts that have been cut from the main sentence to be displayed in the browser
}

//CONVERTING A NUMBER IN TO A STRING BY USING toString METHOD
function string_Method() { //Defining the function
    var z = 645 //Assigning value 645 to var 'z'
    document.getElementById("number_to_string").innerHTML = z.toString()// Assigning Id and defining that var 'z' should be displayed as a string by using the toString() method
}

//UTILIZING toPrecison METHOD TO FORMAT NUMBER TO SPECIFIC LENGTH
function precision_Method() {//Defining the function
    var x = 7478596.5287945; //Assigning variable x value of 7478596.5287945
    document.getElementById("Precision").innerHTML = x.toPrecision(8)//Assigning Id and defining that only first 8 figures of the varibale 'x' should be displayed in the browser when the function is called
}

