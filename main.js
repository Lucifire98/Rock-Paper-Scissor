let computerScore = 0;
let userScore = 0;
let User ;
let x;



document.getElementById("rock").onclick = function(){
        let x = Math.floor(Math.random() * 3) + 1;
    // console.log(x)
    if (x === 1) {
        (x = "rock")
        console.log("its a tie");
        document.getElementById("score").innerHTML =  "its a tie";
        } else if (x === 2) {
            ( x = "paper")
            console.log("you loose")
            document.getElementById("score").innerHTML =  "you loose! paper beats  rock";
            cScore() ; 
            
        } else {
            ( x =" scissor")
            console.log("you win")
            document.getElementById("score").innerHTML =  "you win! rock beats  scissor";
            Score() ; 
            
        }
        //  console.log(x)
}
document.getElementById("paper").onclick = function(){
    let x = Math.floor(Math.random() * 3) + 1;
    // console.log(x)
    if (x === 1) {
        (x = "rock")
        console.log("you win");
        document.getElementById("score").innerHTML =  "you win! paper beats  rock";
        Score() ; 
        } else if (x === 2) {
            ( x = "paper")
            console.log("its a tie")
            document.getElementById("score").innerHTML =  "its a tie";
        } else {
            ( x =" scissor")
            console.log("you loose")
            document.getElementById("score").innerHTML =  "you loose! scissor beats  paper";
            cScore() ; 
        }
        // console.log(x)
}


document.getElementById("scissor").onclick = function(){
    let x = Math.floor(Math.random() * 3) + 1;
    // console.log(x)
    if (x === 1) {
        (x = "rock")
       document.getElementById("score").innerHTML =  "you loose! rock beats  scissor";
       cScore() ; 
        } else if (x === 2) {
            ( x = "paper")
            console.log("you win ")
            document.getElementById("score").innerHTML = " you win! scissor beats paper "
            Score() ; 
        } else {
            ( x =" scissor")
            console.log("it a tie")
            document.getElementById("score").innerHTML = "its a tie! "
        }
        
        // console.log(x)
}

Score  = function  (){
    userScore+=1
    document.getElementById("userScore").innerHTML = "your score : " + userScore;
    if (userScore == 5) {
        console.log("you won the game")
    }else{
        
    }
    if (userScore == 5){
        userScore = 0;
        
    }
    else{

    }
    if(userScore==5){
        computerScore = 0
    }
   

}


cScore  = function  (){
    computerScore+=1;
    document.getElementById("computerScore").innerHTML = "computer score : " + computerScore;
    if (computerScore == 5) {
        console.log("you lost the game")
    }else{
        
    }
    if (computerScore == 5){
        computerScore = 0
        
    }
    
}





