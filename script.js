let humanScore = 0;
let computerScore = 0;

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

function resetScores(){
    humanScore = 0;
    computerScore = 0;
}

// plays a round of rock paper scissors
function playGame(playerChoice){
    let humanSelection;
    let computerSelection;

    // humanSelection = getHumanChoice();
    humanSelection = playerChoice;
    computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    
    if (humanScore == 5){
        resetScores();
        return "You win this game of rock paper scissors!";
    } else if (computerScore == 5){
        resetScores();
        return "You lose this game of rock paper scissor.";
    }
}

// add event listeners to buttons to play 
// round when one of choices clicked
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(playGame(button.id));
  });
});