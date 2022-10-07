
//COUNTDOWN FUNCTION
function countdown() { //Defining the function
    var seconds = document.getElementById("seconds").value;// Defining variable "seconds", assigning value that will be an input from the browser

    function tick() { //Defining nested function
        seconds = seconds - 1; //assigning var "seconds" a value of input -1
        timer.innerHTML = seconds; //this returns value from HTML
        setTimeout(tick, 1000);//Executes function after waiting 1000 miliseconds

        if (seconds == -1) { //Defining if statement; if seconds equal to -1 show alert window
            alert("Time's up")//Alert window
        }
    }
    tick()//Calling for tick() function
}

//SLIDESHOW

const carouselSlide = document.querySelector(".carousel-slide"); //Defining constant reference to css selector ".carousel-slide"
const carouselImages = document.querySelectorAll(".carousel-slide img"); //Defining constant reference to css selector ".carousel-slide" content (Slideshow/carousel images)

//BUTTONS
const prevBtn = document.querySelector("#prevBtn") //Defining constant reference to css selector "prevBtn"
const nextBtn = document.querySelector("#nextBtn") //Defining constant reference to css selector "nextBtn"

//COUNTER
let counter = 1; //Defining variable "counter"; setting value to 1
const size = carouselImages[0].clientWidth; //Defining constant reference to element "size"; assigning value of the width of a slideshow image

carouselSlide.style.transform = "translateX(" + (-size * counter) + " px)"; //Transformation for the slideshow by utilizing translateX() function(Transforms along the horizontal axis/moves pictures from one side to the other)

//BUTTON LISTENERS
nextBtn.addEventListener("click", () => { //Attaching event handler(which will work on mouse click) to the forward/right button
    if (counter >= carouselImages.length - 1) return; // Defining if statement; this was added to fix a bug which occured when clicking next button too fast
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; //Defining transition between images
    counter++;//Increment counter by 1
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";//Adding the aforementioned transformation/line 29
});

prevBtn.addEventListener("click", () => { //Attaching event handler(which will work on mouse click) to the bacwards/left button
    if (counter <= 0) return // Defining if statement; this was added to fix a bug which occured when clicking prev button too fast
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;//Decrementing the counter by 1
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";//Adding the aforementioned transformation/line 29
});

carouselSlide.addEventListener("transitionend", () => { //Attaching an event handler to be called when full transition has been executed
    if (carouselImages[counter].id === "lastClone") { //Defining if statement; 
        carouselSlide.style.transition = "none"//no transition on lastClone element
        counter = carouselImages.length - 2 //Minus 2 on the counter as added two extra images(first and last) to the slideshow
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";//Adding the aforementioned transformation/line 29
    }

    if (carouselImages[counter].id === "firstClone") { //Attaching an event handler to be called when full transition has been executed
        carouselSlide.style.transition = "none"//no transition on firstClone element
        counter = carouselImages.length - counter;//Resseting counter as this is the last img on the slideshow
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";//Adding the aforementioned transformation/line 29
    }
});




