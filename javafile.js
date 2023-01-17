function getComputerChoice() {
    const myArray = ['rock', 'paper', 'scissors']
    const randomElement = myArray[Math.floor(Math.random()* myArray.length)];
    console.log(randomElement)
    return randomElement
}
getComputerChoice()
let playerSelection
const determineWinner = (playerSelection, randomElement) => {
    if (playerSelection === randomElement) {
        return "It's a tie!";
    } else if (playerSelection === 'rock' && randomElement === 'scissors'){
        return  'You win!';
    } else if (playerSelection === 'paper' && randomElement === 'rock'){
        return 'You win!';
    } else if (playerSelection === 'scissors' && randomElement === 'ppaer') {
        return 'You win!';
    } else {
        return "Computer wins!";
    }
}

const playGame = (playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    randomElement = getComputerChoice();
    return determineWinner(playerSelection, randomElement);
}

console.log(playGame('paper'))