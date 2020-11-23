var SECONDS_IN_MINUTE = 60;
var ONE_MINUTE = 1 * SECONDS_IN_MINUTE;

var isGameActive = false;

function resetGame() {
  stopGame();
  clearName();
  clearCounters();
  clearField();
}

function bootGame() {
  startTimer(ONE_MINUTE);
  createField();
  enablePRBtn();
  isGameActive = true;
}

function stopGame() {
  resetTimer();
  resetPause();
  defaultPRBtn();
  disablePRBtn();
}

function endGame() {
  stopGame();
  showScore(pointsCount);
  toggleModal();
  isGameActive = false;
}
