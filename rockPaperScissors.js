function getUserChoice() {
  var userInput = prompt('Rock, Paper, or Scissors?');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else {
    console.log('Error!');
  }
}

function getComputerChoice(randomNumber) {
 var randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice,computerChoice) {
  if(userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  
  if(userChoice === 'bomb') {
    if (computerChoice === 'paper' || computerChoice === 'rock' || computerChoice === 'scissors') {
      return 'You won!';
    }
  }
  
  if(userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } 
    else {
      return 'You won!';
    } 
  }
  
  if(userChoice === 'scissors') {
    if(computerChoice === 'paper') {
      return 'You won!';
    }
    else {
      return 'Computer won!';
    }
  }

  if(userChoice === 'paper') {
    if(computerChoice === 'rock') {
      return 'You won!';
    }
    else {
      return 'Computer won!';
    }
  }
}

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
