function checkGuess() {
  const userInput = parseInt(document.getElementById("userGuess").value);
  const randomNumber = Math.floor(Math.random() * 11); // [0, 10]
  const result = document.getElementById("result");
  const container = document.getElementById("game-container");

  if (isNaN(userInput) || userInput < 0 || userInput > 10) {
    result.textContent = "Por favor, insira um número entre 0 e 10.";
    return;
  }

  if (userInput === randomNumber) {
    result.textContent = `Parabéns! Você acertou! Número: ${randomNumber}`;
    container.style.setProperty("background-color", "lightgreen");
  } else if (userInput < randomNumber) {
    result.textContent = `Errado! Tente um número maior. Número era: ${randomNumber}`;
    container.style.setProperty("background-color", "red");
  } else {
    result.textContent = `Errado! Tente um número menor. Número era: ${randomNumber}`;
    container.style.setProperty("background-color", "red");
  }
}