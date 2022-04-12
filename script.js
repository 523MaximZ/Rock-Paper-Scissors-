// Starting Variables
//Storing HTMl elements a variable for easy access
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
let computerChoiceSpan = document.querySelector('.computerChoice');
let userChoiceSpan = document.querySelector('.userChoice');
let winnerPannel = document.querySelector('.winner');

//setting score variables for player & computer to track score
let playerScore = 0;
let computerScore = 0;
//intializing Global variables to store user and computer selections
let computerChoice;
let playerChoice;
const gameOptions = ["rock", "paper", "scissor"];
//function to randomly generate a choice for the computer, uses a random number 1-3 to store selections)

function computerChoose() {
  const randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameOptions[randomNum];
    computerChoiceSpan.innerHTML = computerChoice;
}

function userChoice(choice) {
    playerChoice = gameOptions[choice];
    userChoiceSpan.innerHTML = playerChoice;
    computerChoose();
    game(playerChoice,computerChoice);
}

function game(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        won("tie");
        return;  // nothing more to check when it's a tie
    }

    if (playerChoice == "rock" && computerChoice == "paper")
        won("computer");
    else if (playerChoice == "rock" && computerChoice == "scissor")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "rock")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "scissor")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "rock")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "paper")
        won("player");
    else
        alert("Wrong inputs")
}

function won(winner) {
    if (winner == "player") {
        roundResult.innerHTML = "You Won";
        playerScore = playerScore + 1;
        pScoreboard.innerHTML = playerScore;
    }
    else if (winner == "computer") {
        roundResult.innerHTML = "Computer Wins";
        computerScore = computerScore + 1;
        cScoreboard.innerHTML = computerScore;
    }
    else {
        roundResult.innerHTML = "TIE";
    }
    winnerPannel.style.display = "block";
}

function resetGame() {
    roundResult.innerHTML = "";
    playerScore = 0;
    pScoreboard.innerHTML = playerScore;
    computerScore = 0;
    cScoreboard.innerHTML = computerScore;
    userChoiceSpan.innerHTML = "";
    computerChoiceSpan.innerHTML = "";
    winnerPannel.style.display = "none";
}
