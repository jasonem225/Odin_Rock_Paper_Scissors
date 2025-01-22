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
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissor"){
        humanChoice = prompt("Invalid Choice\nWill you choose rock, paper, or scissor?").toLowerCase();
    }
    return humanChoice;
}

function playGame(rounds = 5){
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
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
    for (let i = 0; i < rounds; i++){

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    if (humanScore > computerScore){
        return "You win rock paper scissors!";
    } else if (humanScore < computerScore){
        return "You lose rock paper sicssor.";
    } else{
        return "You tied rock paper scissor.";
    }
}

console.log(playGame());