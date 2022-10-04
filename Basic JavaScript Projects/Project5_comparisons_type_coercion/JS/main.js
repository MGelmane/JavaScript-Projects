//Using typeof operator 'false' to return boolean data type
document.write(typeof false);
document.write("<br>");


//Combining a string and a number; it will add the second '10' to the string '10' and display as 1010
document.write("10" + 10);
document.write("<br>");


//Utilizing == to compare values; will return a true
document.write(25 == 25);
document.write("<br>");


//Utilizing == to compare values; will return a false
document.write(2 == 15);
document.write("<br>");


//Utilizing === to return true by ensuring to match the data type and value.
x = "Mike";
y = "Mike";
document.write(x === y);
document.write("<br>");


//Utilizing === to return false by writing a different data type and different value
x = 55
y = "Cat"
document.write(x === y);
document.write("<br>");


//Utilizing === to return false by writing a different data type but the same value for both.
x = 25
y = "25"
document.write(x === y);
document.write("<br>");


//Utilizing === to return false by writing the same data type but a different value for both.
x = "Lea"
y = "Maya"
document.write(x === y);
document.write("<br>");


//Utilizing AND operator to display 'true'
document.write(15 > 8 && 58 > 2);
document.write("<br>");


//Utilizing AND operator to display 'false'
document.write(78 > 54 && 45 < 12);
document.write("<br>");


//Utilizing OR operator to display true
document.write(70 > 50 || 89 < 2);
document.write("<br>");


//Utilizing OR operator to display false
document.write(45 < 2 || 56 < 13);
document.write("<br>");



//Function with a return value that is too large to display; will return a value "infinity"
function Infinite() {
    document.getElementById("Infinity").innerHTML = (1.8E308);
}


//Function with a return value that is too large to display; will return a value "-infinity", as it is a negative number
function negInfinity() {
    document.getElementById("negInfinity").innerHTML = (-5E407);
}

//Function utilizing NOT operator to return value 'True'
function not_Function() {
    document.getElementById("Not").innerHTML = !(17 > 21);
}


//Function utilizing NOT operator to return value 'False' (a double negative as the NOT op is used)
function not_Function2() {
    document.getElementById("DoubleNot").innerHTML = !(105 > 15)
}






 













