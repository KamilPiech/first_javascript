let moves = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return items[Math.floor((Math.random() * items.length))];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (moves.includes(choice)) {
        return choice;
    } else {
        alert("Wrong choice. Rock, Paper or scissors?");
        return getPlayerChoice();
    }
}

function playRound(computerSelection, playerSelection) {

    switch (computerSelection) {
        case "paper":
            if (playerSelection === "paper") {
                return "Draw! Try again!";
                break;
            } else if (playerSelection === "rock") {
                return "You Lose! Paper beats Rock";
                break;
            } else if (playerSelection === "scissors") {
                return "You won!"
                break;
            }

        case "rock":
            if (playerSelection === "rock") {
                return "Draw! Try again!";
                break;
            } else if (playerSelection === "paper") {
                return "You won!";
                break;
            } else if (playerSelection === "scissors") {
                return "You lose! You Lose! Rock beats Scissors"
                break;
            }

        case "scissors":
            if (playerSelection === "rock") {
                return "You won!";
                break;
            } else if (playerSelection === "paper") {
                return "You Lose! Scissors beats Paper";
                break;
            } else if (playerSelection === "scissors") {
                return "Draw! Try again!"
                break;
            }
    }
}

function game() {

    for (let round = 1; round <= 5; round++) {

        computerSelection = getComputerChoice(moves);
        playerSelection = getPlayerChoice();

        console.log("Computer choice: " + computerSelection);
        console.log("Player choice: " + playerSelection);
        console.log(playRound(computerSelection, playerSelection));
    }
}

game();