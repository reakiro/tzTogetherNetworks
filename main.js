$(function() {
  $("#startGame").click(function(event) {
    resetGame();
    bootGame();
    playGame();
  });

  $("#pauseResume").click(function(event) {
    if (isTimerWorking) {
        $(event.target).html('resume');
        canResume = false;
    } else {
        $(event.target).html('pause');
        canResume = true;
    }
  });
});
