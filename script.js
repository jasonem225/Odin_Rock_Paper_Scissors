let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice == 1){
        return "rock";
    } else if (computerChoice == 2){
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Will you choose rock, paper, or scissor?").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let outcome;
    if (humanChoice == computerChoice){
        return "Tie. No one scores."
    } 
    if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            outcome = 0;
        } else{
            outcome = 1;
        }
    } else if (humanChoice == "paper"){
        if (computerChoice == "scissor"){
            outcome = 0;
        } else{
            outcome = 1;
        }
    } else if (humanChoice == "scissor"){
        if (computerChoice == "rock"){
            outcome = 0;
        } else{
            outcome = 1;
        }
    } else{
        return "Invalid answer. No one scores."
    }
    if (outcome == 0){
        computerScore++;
        return "You lose. " + computerChoice + " beats " + humanChoice;
    } else {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);