let options = ["rock" , "paper" , "scissors"];
let win = "You win 🥳!"
let loose = "You loose 😞! ";
let tie = "No winner 😒"

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    return options[randomNumber];
}

function playRound(playerSelection, computerSelection){
    console.log("Your selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);
    let winnerMessage = (playerSelection + " beat(s) " + computerSelection);
    let looserMessage = (computerSelection + " beat(s) " + playerSelection);
    let tieMessage = ("It's a tie 👔! You both played " + playerSelection);
    let errorMessage = ("Please select again between rock, paper and scissors.");
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"){
        console.log(winnerMessage);
        return win;
    } else if (computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" ||
    computerSelection == "scissors" && playerSelection == "paper"){
        console.log(looserMessage);
        return loose;
    } else if (playerSelection === computerSelection){
        console.log(tieMessage);
        return tie;
    } else {
        console.log(errorMessage);
        return tie;
    }
}

function game(){
    playerScore= 0;
    computerScore = 0;
    for (let i=0; i<5; i++){
        let playerSelection = prompt("🪨, 🧻 or ✂️?").toLocaleLowerCase();
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult === win){
            playerScore++;
        } else if (roundResult === loose){
            computerScore++
        } 
    }
    if (playerScore > computerScore){
        console.log("CONGRATULATIONS! YOU WON THE GAME 💥")
    } else if (computerScore > playerScore){
        console.log("HAHA! YOU LOST THE GAME! 🙀")
    } else {
        console.log("UPS! IT'S A TIE! 🤷")
    }
}

game();
