let options = ["rock" , "paper" , "scissors"];
let win = "You win 🥳!"
let loose = "You loose 😞! ";
let tie = "No winner 😒"
let playerScore= 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.playButton')
let playerBoard = document.querySelector('.playerScore')
let computerBoard = document.querySelector('.computerScore');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
            game(e.target.value);
    })
})

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

function game(playerChoice){   
    if (playerScore == 5){
        return;
    } else if (computerScore == 5){
        return;
    } else {
        let playerSelection = playerChoice;
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);
            if (roundResult === win){
                playerScore++;
                playerBoard.textContent = playerScore;
            } else if (roundResult === loose){
                computerScore++
                computerBoard.textContent = computerScore;
            } 
    }
}

