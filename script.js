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
    let text;
    switch (result) {
        case 1:
            playerScore += 1;
            text = "You won this round!";
            break;
        case 0:
            botScore += 1;
            text = "You lost this round!";
            break;
        case -1:
            text = "It's a tie!";
            break;
        default:
            text = "Sorry, something unexpected happened";
    }
    writeDiv(text, ".result");
    displayScore();
}

function determineMatchWinner() {
    let text;
    if (playerScore >= maxWins) {
        text = "You won the match!";
    } else if (botScore >= maxWins) {
        text = "You lost the match!";
    } else {
        writeDiv("", ".match")
        return;
    }
    playerScore = 0;
    botScore = 0;
    writeDiv(text + " Thanks for playing!", ".match")
}

function writeDiv(text, divClass) {
    const div = document.querySelector(divClass);
    div.innerHTML = text;
}

function displayScore() {
    let score;
    score = `<ul><li>Player - ${playerScore}</li> <li>Computer - ${botScore}</li>`;
    writeDiv(score, ".score");
}

function playRound(selection) {
    let roundResult = round(selection);
    determineRoundWinner(roundResult);
    determineMatchWinner();
}


let playerScore = 0;
let botScore = 0;
let maxWins = 5;
const buttons = document.querySelectorAll("button.game");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = parseInt(button.id);
        playRound(playerSelection);
    });
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    playerScore = 0;
    botScore = 0;
    gameInfo = [".result", ".score", ".match"];
    for (div of gameInfo) {
        writeDiv("", div);
    }
});