
function my_Dictionary() { //Defining a dictionary
    var Beverage = {      //Defining a variable Beverage
        Type: "non-alcoholic", //Defining a key 'Type' and assigning a value 'non-alcoholic'
        Name: "Tonic water", //Defining a key 'Name' and assigning a value'Tonic water'
        Brand: "Fever Tree", //Defining a key 'Brand' and assigning value 'Fever Tree'
        Flavor: "elderflower", //Defining a key 'Flavor' and assigning a value 'elderflower'
        Size: "200 ml", //Defining a key 'Size' and assigning a value '200 ml'
    };
    delete Beverage.Flavor //deleting the key-valuepair 'Beverage.Flavor' for training purposes to see how it will display it on the browser
    document.getElementById("Dictionary").innerHTML = Beverage.Name + " is a " + Beverage.Type + " drink. " + "Our favourite flavor is " + Beverage.Flavor + "!";
    //Defining element id and adding extra text inbetween the key-value pairs. Note that 'Beverage.Flavor' key-value pair has been deleted, so will not be displayed as per the dictionary!

}

