let button = document.querySelector("button");
                                    
// 1. Declare a variable called `answer` that stores the p tag that has the class name `answer`.
const answer = document.querySelector(".answer");


button.addEventListener("click", function() {
// 2. Replace the value with a string with a name of a movie you enjoy.
answer.innerHTML = "The Mario Movie";
// 3. Uncomment the line of code below, run, and try the button.
answer.innerHTML="The Mario Movie";


});