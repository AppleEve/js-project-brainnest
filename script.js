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
            game(e.target.attributes[1].value);
            console.log(e)
    })
})

function game(playerChoice){   
    let resultBoard = document.getElementById("resultBoard");
    if (playerScore === 5){
        resultBoard.textContent = "YOU WON THE GAME!"
        resultBoard.style.cssText = "color: rgb(38,134,71, 0.8); border: none; font-size: 30px"
        return;
    } else if (computerScore === 5){
        resultBoard.textContent = "YOU LOST THE GAME!"
        resultBoard.style.cssText = "color: rgb(139, 0, 0, 0.5); border: none; font-size: 30px"
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

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    return options[randomNumber];
}

function playRound(playerSelection, computerSelection){
    let winnerMessage = ("You win 🥳! Your " + playerSelection + " beat(s) computer's " + computerSelection + ".");
    let looserMessage = ("You loose 😞! Computer's " + computerSelection + " beat(s) your " + playerSelection + ".");
    let tieMessage = ("It's a tie 👔! You both played " + playerSelection + ".");
    let errorMessage = ("Please select again between rock, paper and scissors.");
    let roundResult = document.getElementById("roundResult");
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"){
        roundResult.textContent = winnerMessage;
        roundResult.style.cssText = "color: rgb(38,134,71, 0.8);"
        return win;
    } else if (computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" ||
    computerSelection == "scissors" && playerSelection == "paper"){
        roundResult.textContent = looserMessage;
        roundResult.style.cssText = "color: rgb(139, 0, 0, 0.9);"
        return loose;
    } else if (playerSelection === computerSelection){
        roundResult.textContent = tieMessage;
        roundResult.style.cssText = "color: rgb(0, 0, 0, 0.5);"
        return tie;
    } else {
        roundResult.textContent = errorMessage;
        roundResult.style.cssText = "color: rgb(0, 0, 0, 0.5);"
        return tie;
    }
}

