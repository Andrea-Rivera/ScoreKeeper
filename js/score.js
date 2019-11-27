

// GET button Player One
var buttonp1 = document.getElementById("playerOne");
var p1Display = document.querySelector("#displayp1");
//var h1 = document.querySelector("h1");
var buttonp2 = document.getElementById("playerTwo");
var p2Display = document.querySelector("#displayp2");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningscoredisplay = document.querySelector("p span");
var winningScore = 5;
var buttonReset = document.getElementById("reset");
var numInput = document.querySelector("input");

//MANIPULATE button 1
buttonp1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver =true;
        }
        //h1.textContent = p1Score;
        p1Display.textContent = p1Score;
    }
});

//Manipulate button 2
buttonp2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            
            gameOver =true;     
        }
        //h1.textContent = p1Score;
        p2Display.textContent = p2Score;
    }
    
});

//Manipulate  Reset button 

buttonReset.addEventListener("click", function(){
  reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;

    //Removing the winner class from both scores.
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}


//Manipulate Dropdown input
numInput.addEventListener("change", function(){
   winningscoredisplay.textContent = this.value; // refering to numInput
   winningScore = Number(this.value); // refering to numInput
   reset();
})
