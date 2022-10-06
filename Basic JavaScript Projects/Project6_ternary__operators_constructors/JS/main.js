
function Vote_Function() { //Defining a function
    var Age, Can_vote; // Defining variables 'Age' and 'Can_vote'
    Age = document.getElementById("Age").value; // Assigning  an id for variable 'Age', 
    Can_vote = (Age < 18) ? "You are too young " : "You are old enough "; // Assigning values to variable 'Can_vote' by utilizing ternary operator
    document.getElementById("Vote").innerHTML = Can_vote + "to vote."; //Output to be displayed; dependant on the value of variable 'Age'
}



function Beverage(Type, Name, Brand, Flavor, Size) { //Defining constructor function
    this.Beverage_Type = Type; //Defining constructor function object with 'this' key word
    this.Beverage_Name = Name;  //Defining constructor function object with 'this' key word
    this.Beverage_Brand = Brand;  //Defining constructor function object with 'this' key word
    this.Beverage_Flavor = Flavor;  //Defining constructor function object with 'this' key word
    this.Beverage_Size = Size;  //Defining constructor function object with 'this' key word
} 


var Drink1 = new Beverage("non-alcoholic", "Kombucha", "Remedy", "raspberry", "300 ml"); //Creating new object and assigning values
var Drink2 = new Beverage("non-Alcoholic", "tonic water", "Fentimans", "clementine", "200 ml"); //Creating new object and assigning values
var Drink3 = new Beverage("alcoholic", "sparkling wine", "Nyetimber", "honey/citrus", "750 ml"); //Creating new object and assigning values

function Bev_function() { //  Defining the function
    document.getElementById("New_and_This").innerHTML = "We have many different drinks on our list to choose from! Grab either a bottle of " +
        Drink2.Beverage_Brand + '\xa0' + Drink2.Beverage_Flavor + '\xa0' + Drink2.Beverage_Name + " or something from our " + Drink3.Beverage_Type +
        " drinks section, like a glass of " + Drink3.Beverage_Brand + '\xa0' + Drink3.Beverage_Name + "." //Assigning ID  and defining the output to be displayed when the function is being called
}


function Main() { //Defining main/parent function
    var name = document.getElementById("name").value; //Defining variable and assigning id to it
    var age = document.getElementById("age").value //Defining variable and assigning id to it
    document.getElementById("Nesting").innerHTML = Nest() //Calling for the child/nested function

    function Nest() { //Defining nested function
        document.write("Your name is " + name + " and your age is " + age) // Defining output to be displayed when the function is called
    }
   
}