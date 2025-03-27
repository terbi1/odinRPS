function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
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

function updateChoice(updateTarget, newChoice) {
    switch (newChoice) {
        case "rock":
            updateTarget.textContent = "✊";
            break;
        case "paper":
            updateTarget.textContent = "✋";
            break;
        case "scissor":
            updateTarget.textContent = "✌";
            break;
        default:
    }
}

const choiceButton = document.querySelectorAll("button.choice");

choiceButton.forEach(button => {
    button.addEventListener("click", (button) => {

        updateChoice(document.querySelector(".human > .choice"), event.target.id);

        updateChoice(document.querySelector(".machine > .choice"), getComputerChoice())
    })
});



// function playGame() {
//     for(i = 0; i < 5; ++i) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     // console.log(`Human: ${humanScore}`);
//     // console.log(`Machine: ${computerScore}`);
// } 

playGame();