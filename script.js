let options = ["Rock" , "Paper" , "Scissors"];

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
   return options[randomNumber];
}

function gameRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt("🪨, 🧻 or ✂️?");
    console.log(computerSelection);
    console.log(playerSelection);
    
}

gameRound();