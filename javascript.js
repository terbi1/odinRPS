function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return prompt("Enter you choice human");
}

let humanScore = computerScore = 0;

function getResult(humanChoice = "", computerChoice) {

    // rock = 0; paper = 1; scissor = 2;

    switch (true) {
        case /rock/i.test(humanChoice):
            if (computerChoice == 0) {
                return "draw";
            }

            if (computerChoice == 1) {
                return "computerWin";
            }
            break;
        case /paper/i.test(humanChoice):
            if (computerChoice == 1) {
                return "draw";
            }

            if (computerChoice == 2) {
                return "computerWin";
            }
            break;
        case /scissor/i.test(humanChoice):
            if (computerChoice == 2) {
                return "draw";
            }

            if (computerChoice == 0) {
                return "computerWin";
            }
            break;
        default:
            return "humanWin";
    }
}

function playRound(humanChoice = "", computerChoice) {

    switch (getResult(humanChoice, computerChoice)) {
        case "humanWin":
            ++humanScore;
            break;
        case "computerWin":
            ++computerScore;
            break;
    }
    console.log(`Human ${humanScore} - ${computerScore} Machine`)
}

const choiceButton = document.querySelectorAll("button.choice");

choiceButton.forEach(button => {
    button.addEventListener("click", (button) => {
        let newChoice = "?";

        switch (event.target.id) {
            case "rock":
                newChoice = "✊";
                break;
            case "paper":
                newChoice = "✋";
                break;
            case "scissor":
                newChoice = "✌";
                break;
            default:
        }

        updateChoice(document.querySelector(".human > .choice"), newChoice);
    })
});

function updateChoice(updateTarget, newChoice) {
    updateTarget.textContent = newChoice;
}

// function playGame() {
//     for(i = 0; i < 5; ++i) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     // console.log(`Human: ${humanScore}`);
//     // console.log(`Machine: ${computerScore}`);
// } 

playGame();