let humanScore;
let computerScore;

// uses rand number generator to pick computer choice 
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3));
    if (computerChoice == 0){
        return "rock";
    } else if (computerChoice == 1){
        return "paper";
    } else {
        return "scissor";
    }
}

// create prompt to get human choice
function getHumanChoice() {
    let humanChoice = prompt("Will you choose rock, paper, or scissor?")
    if (humanChoice == null) {return humanChoice};
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissor"){
        humanChoice = prompt("Invalid Choice\nWill you choose rock, paper, or scissor?").toLowerCase();
        if (humanChoice == null) {return humanChoice};
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;
}

// plays round, compare 2 inputs to deice who wins and increment winner score
function playRound(humanChoice, computerChoice) {
    if (humanChoice == null){
        computerScore++;
        return "Forfeit round. Computer scores."
    }
    if (humanChoice == computerChoice){
        return "Tie. No one scores."
    } 
    if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissor") ||
        (humanChoice == "scissor" && computerChoice == "rock")){
        computerScore++;
        return "Computer scores. " + computerChoice + " beats " + humanChoice;
    } else {
        humanScore++;
        return "Human scores. " + humanChoice + " beats " + computerChoice;
    }
}

// plays rounds (default 5) of rock paper scissors
function playGame(rounds = 5){
    humanScore = 0;
    computerScore = 0;
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < rounds; i++){

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    if (humanScore > computerScore){
        return "You win this game of rock paper scissors!";
    } else if (humanScore < computerScore){
        return "You lose this game of rock paper scissor.";
    } else{
        return "You tied this game of rock paper scissor.";
    }
}

console.log(playGame());