btnParty.addEventListener("click", () => {
  confetti("tsparticles", {
    angle: 90,
    count: 25,
    position: { x: 50, y: 50 },
    spread: 90,
    startVelocity: 60,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    colors: ["#fff", "#f00"],
    shapes: ["square", "circle"],
    scalar: 1,
    zIndex: 2000,
    disableForReducedMotion: true
  });
});



const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    // Function to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']

        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;


                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins
                winner(this.innerText,computerChoice)

                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })

    }

    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'AI Wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            }else{
                result.textContent = 'You Win'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'AI Wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'You Win';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'AI Wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'You Win';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const gameOver = (playerOptions,movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }


    // Calling playGame function inside game
    playGame();

}

// Calling the game function
game();
