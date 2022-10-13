let options = ["rock" , "paper" , "scissors"];


function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
   return options[randomNumber];
}

function playRound(playerSelection, computerSelection, scoreNumber){
    console.log("Your selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);
    let winnerMessage = ("You win 🥳! " + playerSelection + " beat(s) " + computerSelection);
    let looserMessage = ("You loose 😞! " + computerSelection + " beat(s) " + playerSelection);
    let tieMessage = ("It's a tie 👔! You both played " + playerSelection);
    let errorMessage = ("Please select again between rock, paper and scissors.");
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"){
        scoreNumber = scoreNumber + 1;
        return(winnerMessage);
    } else if (computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" ||
    computerSelection == "scissors" && playerSelection == "paper"){
        scoreNumber = scoreNumber - 1;
        return(looserMessage);
    } else if (playerSelection === computerSelection){
        return(tieMessage);
    } else {
        return(errorMessage);
    }
}

function game(){
    let scoreNumber = 0;
    for (let i=0; i<5; i++){
        let playerSelection = prompt("🪨, 🧻 or ✂️?").toLocaleLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection, scoreNumber));
        console.log(scoreNumber);
    }
}


game();
