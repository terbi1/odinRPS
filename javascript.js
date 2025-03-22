function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return prompt("Enter you choice human");
}

let humanScore = computerScore = 0;

function getResult(humanChoice = "", computerChoice) {

    // rock = 0; paper = 1; scissor = 2;

    switch(true) {
        case /rock/i.test(humanChoice):
            if(computerChoice == 0) {
                return "draw";
            }
    
            if(computerChoice == 1) {
                return "computerWin";
            }
            break;
        case /paper/i.test(humanChoice):
            if(computerChoice == 1) {
                return "draw";
            }
    
            if(computerChoice == 2) {
                return "computerWin";
            }
            break;
        case /scissor/i.test(humanChoice):
            if(computerChoice == 2) {
                return "draw";
            }
    
            if(computerChoice == 0) {
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



function playGame() {
    for(i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    // console.log(`Human: ${humanScore}`);
    // console.log(`Machine: ${computerScore}`);
} 

playGame();