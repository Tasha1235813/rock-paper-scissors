let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

playRound(playerChoice, computerChoice);

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }





const gameArray = ["Rock", "Paper", "Scissors"];
let shoot = Math.random();
let choices = gameArray.length;
let randOption = Math.floor(shoot * choices);
let randChoice = gameArray[randOption];

function computerPlay() {
    return gameArray[~~(Math.random() * gameArray.length)];
}

function playRound(playerChoice, computerChoice) {
    computerChoice = computerPlay().toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    if (computerChoice === playerChoice) {
      displayResults("Draw. Make another attempt, ${user}.");
    } else if (
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "paper" && playerChoice === "rock") ||
      (computerChoice === "scissors" && playerChoice === "paper")
    ) {
      computerScore = ++computerScore;
      keepCPUScore();
      if (computerScore === 1) {
        displayResults(
          `Commence death by 1,000 cuts.
          ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`
          );
      } else if (computerScore === 2) {
        displayResults(
          `Your demise is 40% complete.
          ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`
          );
      } else if (computerScore === 3) {
        displayResults(
          `Do you have any family I should contact for you?
          ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`
          );
      } else if (computerScore === 4) {
        displayResults(
          `Are those tears in your eyes?
          ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`
          );
      } else {
        displayResults(
          `That was nearly not pathetic. Nice try.
          ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.
          Computer is victorious.`
          );
      } else {
        playerScore = ++playerScore;
        keepPlayerScore();
        
      }
    }
  }
      
function displayResults() {

}

function capitalize(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}