$(function() {
  $("#startGame").click(function(event) {
    resetGame();
    bootGame();
  });

  $("#gameField").click(function(event) {
    if (isValidGame($(event.target))) {
      addSquare(quantity());
      killSquare($(event.target));
      logSquare($(event.target));
      updateScore(++pointsCount);
    }
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

  $("#saveResults").click(() => {
    var results = [];
    if (getName())
      results.push({
        name: getName(),
        score: getScore()
      });
    updateTable(results);
    toggleModal();
  });
});
