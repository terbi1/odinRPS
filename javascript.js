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

let currentRound = -1;
const winScore = 5;
let humanScore = computerScore = 0;

function updateRound() {
    document.querySelector("match-description > div").textContent = `Round ${++currentRound}`;
}

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
    updateRound();

    if (Math.max(humanScore, computerScore) >= 5) {
        announceResult(humanScore >= 5 ? "human" : "machine");
        addPlayAgain();
    }

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

function announceResult(winner) {
    switch (winner) {
        case "human":
            alert("Humans reign supreme!");
            break;
        case "machine":
            alert("Machine takes over!!!");
            break;
    }
}

function gameInit() {
    currentRound = -1;
    document.querySelector("play-section > match-description > text").textContent = `First to score ${winScore} win`;
    humanScore = computerScore = 0;
    updateScore(0, 0);
    updateRound();
}

gameInit();

const playAgainButton = document.createElement("button");

function addPlayAgain() {
    playAgainButton.textContent = "Play again";
    document.querySelector("play-section").appendChild(playAgainButton);
}

playAgainButton.addEventListener("click", () => {
    gameInit();
})



// function playGame() {
//     for (i = 0; i < 5; ++i) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     // console.log(`Human: ${humanScore}`);
//     // console.log(`Machine: ${computerScore}`);
// }

// playGame();