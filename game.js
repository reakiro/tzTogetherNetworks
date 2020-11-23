var oneMinute = 1 * 60;
var isGameActive = false;

function resetGame() {
    stopGame();
    clearName();
    clearCounters();
    clearField();
}

function bootGame() {
    startTimer(oneMinute);
    createField();
    enablePRBtn();
    isGameActive = true;
}

function playGame() {
    $("#gameField").click(function(event) {
        if (isValidGame($(event.target))) {
            addSquare(quantity());
            killSquare($(event.target));
            logSquare($(event.target));
            updateScore(++pointsCount);       
        }
    });
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