function game() {
    alert("Rock, Paper, Scissors! First to 5 against the computer!\n");
    let playerWins = 0;
    let computerWins = 0;
    while (true) {
        if (playerWins >= 5) {
            alert("You won the game! \nThanks for playing!");
            break;
        } else if (computerWins >= 5) {
            alert("You lost the game! \nThanks for playing!");
            break;
        } else {
            play = prompt("Enter your choice, or press Enter to exit.\n");
            let result;
            if (play == "" || play === null) {
                alert("Thanks for playing!");
                break;
            } else {
                result = round(play);
            }
            let txtResult;
            switch (result) {
                case 1:
                    playerWins += 1;
                    txtResult = "You won this round!";
                    console.log(txtResult);
                    break;
                case 0:
                    computerWins += 1;
                    txtResult = "You lost this round!";
                    console.log(txtResult);
                    break;
                case -1:
                    txtResult = "It's a tie!";
                    console.log(txtResult);
                    break;
                default:
                    console.log("Sorry, something unexpected happened");
            }
            let score = `Score:\n Player - ${playerWins}\n Computer - ${computerWins}`;
            console.log(score);
        }
    }
}

function round(choice) {
    choice = standardizeInput(choice);
    choice = choiceToInt(choice);
    let computerChoie = getComputerChoice();
    let resultMatrix = [[-1, 0, 1], [1, -1, 0], [0, 1, -1]]; // Win - 1, Lose - 0, Tie - (-1)
    return resultMatrix[choice][computerChoie];
}

function getComputerChoice() {
    number = randomInt(1, 2);     // Rock - 0, Paper - 1, Scissors - 2
    return number;
}

function standardizeInput(choice) {
    choice = choice.toLowerCase();
    choice = choice.replace(choice.substring(0, 1), choice.substring(0, 1).toUpperCase());
    return choice;
}

function choiceToInt(choice) {
    switch (choice) {
        case "Rock":
            return 0;
        case "Paper":
            return 1;
        case "Scissors":
            return 2;
        default:
            console.log("Sorry, something unexpected happened");
    }
}

function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

game()