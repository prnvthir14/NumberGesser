let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Create a generateTarget() function. This function will be called at the start of each new round in order to generate the new secret target number.

// This function should return a random integer between 0 and 9.

const generateTarget = () => {
  let numToReturn = Math.floor(Math.random() * 10);

  return numToReturn;
};

// console.log(generateTarget());

// Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.

// This function:

// Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
// Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
// Return true if the human player wins, and false if the computer player wins.

// const CompareGuess = function () {

// }

const compareGuess = (userGuess, pcGuess, target) => {
  //compare userGuess and target - store abs difference
  let diffUser = Math.abs(target - userGuess);

  //compare userGuess and target - store abs difference
  let diffPC = Math.abs(target - pcGuess);

  //check and return true/false based on which is closer
  if (diffUser <= diffPC) {
    //user wins
    return true;
  } else if (diffPC < diffUser) {
    //pc wins
    return false;
  }
};

// Create an updateScore() function. This function will be used to correctly increase the winner’s score after each round.

// This function:

// Has a single parameter. This parameter will be a string value representing the winner.
// Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
// Does not need to return any value.

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "") {
    computerScore++;
  }
  return `winner updated`;
};
