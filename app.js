const playTheGame = () => {
  // hide home section
  /*
  const homeSection = document.getElementById("home");
  homeSection.classList.add("hidden");
*/

  hiddenById("home");

  //   enable play ground section
  /* 
  const playGroundSection = document.getElementById("play-ground");
  playGroundSection.classList.remove("hidden");
  //   console.log(playGroundSection.classList);
  */

  showById("play-ground");

  continueGame();
};
// game over
function gameOver() {
  hiddenById("play-ground");
  showById("score-card");
  const lastScore = getInnerTextValuById("current-score");
  setValueById("last-score", lastScore);
}
// play again
function playAgain() {
  hiddenById("score-card");
  showById("play-ground");
  // setting default value
  setValueById("current-life", 5);
  setValueById("current-score", 0);
}
function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabeteElement = document.getElementById("current-element");
  currentAlphabeteElement.innerText = alphabet;
  setBgColor(alphabet);
}

// handle key pressed
function handleKeyPressed(event) {
  const pressedKey = event.key;
  const currentKey = document.getElementById("current-element");
  const screenKey = currentKey.innerText.toLowerCase();
  if (screenKey === pressedKey) {
    // update score

    const score = getInnerTextValuById("current-score");
    const updateScore = score + 1;
    setValueById("current-score", updateScore);

    /*
    // 1. get score
    const currentScore = document.getElementById("current-score");
    const scoreText = currentScore.innerText;
    let score = parseInt(scoreText);
    console.log(score);

    // 2. update score
    score += 1;
    // 3. display score
    currentScore.innerText = score;
  
  */
    removeBg(screenKey);
    // start next round
    continueGame();
  } else {
    const lifeScore = getInnerTextValuById("current-life");
    const updateScore = lifeScore - 1;
    setValueById("current-life", updateScore);
    if (updateScore === 0) {
      gameOver();
    }

    // 1. get life score
    /*
    const currentElement = document.getElementById("current-life");
    const lifeScoreText = currentElement.innerText;
    let life = parseInt(lifeScoreText);
    // 2. update life score
    life -= 1;
    // 3. display life score
    currentElement.innerText = life;
    console.log("life", life);

*/
  }
}
document.addEventListener("keyup", handleKeyPressed);
