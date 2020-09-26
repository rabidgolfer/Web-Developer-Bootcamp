// create secretNumber
const secretNumber = 4;

// ask user for guess
let stringGuess = prompt("Guess a number");
let guess = Number(stringGuess);


// check if guess is right
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
} else if(guess > secretNumber){
    alert("You guessed too high");
} else {
    alert("You guessed too low");
}

