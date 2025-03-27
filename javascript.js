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

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice == computerChoice) return "draw";

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                return "computerWin";
            }
            break;
        case "paper":
            if (computerChoice == "scissor") {
                return "computerWin";
            }
            break;
        case "scissor":
            if (computerChoice == "rock") {
                return "computerWin";
            }
            break;
    }

    return "humanWin";

}

function updateScore(humanScore, computerScore) {
    document.querySelector(".human .score").textContent = `Human: ${humanScore}`;
    document.querySelector(".machine .score").textContent = `Machine: ${computerScore}`;
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

    updateScore(humanScore, computerScore);
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

        let humanChoice = event.target.id;
        let machineChoice = getComputerChoice();

        updateChoice(document.querySelector(".human > .choice"), humanChoice);

        updateChoice(document.querySelector(".machine > .choice"), machineChoice);

        playRound(humanChoice, machineChoice);
    })
});



// function playGame() {
//     for (i = 0; i < 5; ++i) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     // console.log(`Human: ${humanScore}`);
//     // console.log(`Machine: ${computerScore}`);
// }

// playGame();