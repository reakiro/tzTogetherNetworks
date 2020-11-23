var interval = 0;

var isTimerWorking = true;
var canResume = true;

function resetPause() {
  canResume = true;
  isTimerWorking = true;
}

function resetTimer() {
  if (interval) clearInterval(interval);
}

function startTimer(duration) {
  var timer = duration,
    minutes, seconds;
  interval = setInterval(function() {
    if (canResume) {
      isTimerWorking = true;
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      $('#counterTime').text(`${minutes}:${seconds}`);

      if (--timer < 0) timer = duration;
      duration--;
      if (duration < 0) endGame();

    } else isTimerWorking = false;
  }, 1000);
}
