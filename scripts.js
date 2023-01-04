let moves = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(items) {
    return items[Math.floor((Math.random() * items.length))];
}

// function getPlayerChoice() {
//     // let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
//     // if (moves.includes(choice)) {
//     //     return choice;
//     // } else {
//     //     alert("Wrong choice. Rock, Paper or scissors?");
//     //     return getPlayerChoice();
//     // }
// }

function playRound(computerSelection, playerSelection) {
    const currentScore = document.querySelector('.scores');
    currentScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

    switch (computerSelection) {
        case "paper":
            if (playerSelection === "paper") {
                displayResults("Draw! Try again!");
                break;
            } else if (playerSelection === "rock") {
                displayResults("You Lose! Paper beats Rock");
                computerScore++;
                break;
            } else if (playerSelection === "scissors") {
                displayResults("You won!");
                playerScore++;
                break;
            }

        case "rock":
            if (playerSelection === "rock") {
                displayResults("Draw! Try again!");
                break;
            } else if (playerSelection === "paper") {
                displayResults("You won!");
                playerScore++;
                break;
            } else if (playerSelection === "scissors") {
                displayResults("You Lose! Rock beats Scissors");
                computerScore++;
                break;
            }

        case "scissors":
            if (playerSelection === "rock") {
                displayResults("You won!");
                playerScore++;
                break;
            } else if (playerSelection === "paper") {
                displayResults("You Lose! Scissors beats Paper");
                computerScore++;
                break;
            } else if (playerSelection === "scissors") {
                displayResults("Draw! Try again!");
                break;
            }
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        //console.log(e.target.id);
        playerSelection = this.id.toLowerCase();
        computerSelection = getComputerChoice(moves);

        //console.log(playRound(computerSelection, playerSelection));
        playRound(computerSelection, playerSelection);
        if (playerScore == 5) {
            displayWinner("Player");
        } else if (computerScore == 5) {
            displayWinner("Computer");
        }
    });
});

function displayResults(str) {
    const resultsDiv = document.createElement('div');
    resultsDiv.textContent = str;
    document.body.appendChild(resultsDiv);
}

function displayWinner(str) {
    const winnerDiv = document.createElement('div');
    winnerDiv.textContent = `${str} won the game!`
    document.body.appendChild(winnerDiv);
    playerScore = 0;
    computerScore = 0;
}

// function game() {

//     for (let round = 1; round <= 5; round++) {

//         computerSelection = getComputerChoice(moves);
//         playerSelection = getPlayerChoice();

//         console.log("Computer choice: " + computerSelection);
//         console.log("Player choice: " + playerSelection);
//         console.log(playRound(computerSelection, playerSelection));
//     }
// }

//game();