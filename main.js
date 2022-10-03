const score = document.getElementById("score");
const Rock = document.getElementById("rock")
const Paper = document.getElementById("paper")
const Scissor = document.getElementById("scissor")
const uScore =  document.getElementById("userScore") ;
const cScore1 = document.getElementById("computerScore");
let computerScore = 0;
let userScore = 0;
let User ;
let x;

// Function for rock 
Rock.onclick = function(){
        let x = Math.floor(Math.random() * 3) + 1;
    // console.log(x)
    if (x === 1) {
        (x = "rock")
        console.log("its a tie");
        score.textContent =  "Its a tie";
        } else if (x === 2) {
            ( x = "paper")
            console.log("you loose")
            score.textContent =  "You loose! Paper beats  Rock";
            cScore() ; 
            
        } else {
            ( x =" scissor")
            console.log("you win")
            score.textContent =  "You win! Rock beats  Scissor";
            Score() ; 
            
        }
        //  console.log(x)
}

// Function for Papper 
Paper.onclick = function(){
    let x = Math.floor(Math.random() * 3) + 1;
    // console.log(x)
    if (x === 1) {
        (x = "rock")
        console.log("you win");
        score.textContent =  "You win! Paper beats  Rock";
        Score() ; 
        } else if (x === 2) {
            ( x = "paper")
            console.log("its a tie")
            score.textContent =  "Its a tie";
        } else {
            ( x =" scissor")
            console.log("you loose")
            score.textContent =  "You loose! Scissor beats  Paper";
            cScore() ; 
        }
        // console.log(x)
}

// Function for Scissor
Scissor.onclick = function(){
    let x = Math.floor(Math.random() * 3) + 1;
    // console.log(x)
    if (x === 1) {
        (x = "rock")
       score.textContent =  "You loose! Rock beats  Scissor";
       cScore() ; 
        } else if (x === 2) {
            ( x = "paper")
            console.log("you win ")
            score.textContent = " You win! Scissor beats Paper "
            Score() ; 
        } else {
            ( x =" scissor")
            console.log("it a tie")
            score.textContent = "Its a tie! "
        }
         // console.log(x)
}


// keeps the user score
    Score  = function  (){
    userScore+=1 <5
    uScore.textContent = "Your score : " + userScore;
    
    if (userScore == 5) {
        console.log("you won the game")
        alert("You Won")
        uScore.textContent = "Your score : " + 0;
        cScore1.textContent = "Computer score : " + 0;
    }
}
// keeps the computer Score
  cScore  = function  (){
    computerScore+=1 < 5;
    cScore1.textContent = "Computer score : " + computerScore;
    if (computerScore == 5) {
        console.log("you lost the game")
        alert("You Lost")
        cScore1.textContent = "Computer score : " + 0;
        uScore.textContent = "Your score : " + 0;
    }
}
