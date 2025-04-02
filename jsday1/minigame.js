alert("Guess the random number!");

let correctAnswer = Math.floor(Math.random() * 100) + 1;
let userGuess;
let attemptCount = 0;

while (userGuess !== correctAnswer) {
  userGuess = parseInt(prompt("Enter your guess between 1-100"));
  //increases the attemptCount by 1
  attemptCount++;

  if (userGuess < 1 || userGuess > 100) {
    alert("You have entered an invalid number");
  } else if (userGuess === correctAnswer) {
    alert("Good job, you got it right!");
  } else if (userGuess > correctAnswer) {
    alert("Your guess was too high!");
  } else {
    alert("Your guess is too low");
  }

}

//this is in back ticks (the key on the left of your 1 key)
alert(`You guessed the answer in ${attemptCount} attempts`)
alert("You guessed the answer in " + attemptCount + " attempts");