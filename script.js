function round(choice) {
    let computerChoie = getComputerChoice();
    // 2-d array to determine the winner, array indices are player and computer choices
    let resultMatrix = [[-1, 0, 1], [1, -1, 0], [0, 1, -1]]; // Win - 1, Lose - 0, Tie - (-1)
    return resultMatrix[choice][computerChoie];
}

function getComputerChoice() {
    number = randomInt(0, 2);     // Rock - 0, Paper - 1, Scissors - 2
    return number;
}

function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function determineRoundWinner(result) {
    switch (result) {
        case 1:
            playerScore += 1;
            writeRound("You won this round!");
            displayScore();
            break;
        case 0:
            botScore += 1;
            writeRound("You lost this round!");
            displayScore();
            break;
        case -1:
            writeRound("It's a tie!");
            displayScore();
            break;
        default:
            writeRound("Sorry, something unexpected happened");
    }
}

function determineMatchWinner() {
    if (playerScore >= maxWins) {
        writeRound("You won the match!");
    } else if (botScore >= maxWins) {
        writeRound("You lost the match!");
    } else {
        return;
    }
    playerScore = 0;
    botScore = 0;
    writeRound("Thanks for playing");
}

function writeRound(text) {
    let result = document.createElement("div");
    const body = document.querySelector("body")
    result.innerHTML = "<div>" + text + "</div>";
    body.append(result);
}

function displayScore() {
    let score;
    score = `<ul><li>Player - ${playerScore}</li> <li>Computer - ${botScore}</li>`;
    writeRound(score);
}

function playRound(selection) {
    let roundResult = round(selection);
    determineRoundWinner(roundResult);
    determineMatchWinner();
}


let playerScore = 0;
let botScore = 0;
let maxWins = 5;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = parseInt(button.id);
        playRound(playerSelection);
    });
});