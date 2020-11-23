function isSquare(target) {
  return target.hasClass('divSquare');
}

function isDead(target) {
  return target.hasClass('dead');
}

function isValidGame(target) {
  return isSquare($(target)) && !isDead($(target)) && (isGameActive) && (isTimerWorking);
}
