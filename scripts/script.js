let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;
  while (attempts > 0) {
    if (guess == randomNumber) {
      attempts = 0;
      feedbackElement.innerHTML = "Congratulations! You guessed the number.";
      feedbackElement.style.color = "green";
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = `Too low. Try again. ${attempts} attempts remaining.`;
      feedbackElement.style.color = "red";
      break;
    } else if (guess > randomNumber) {
      feedbackElement.innerHTML = `Too high. Try again. ${attempts} attempts remaining.`;
      break;
    }
  }
  if (attempts == 0 && guess != randomNumber) {
    feedbackElement.innerHTML = `Game over. You ran out of attempts. The correct number was ${randomNumber}.`;
    feedbackElement.style.color = "red";
  }
}
