var colors = ["lightsalmon", "indigo", "lightgreen", "gold"];
var pointsCount = 0;

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomId(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function clearField() {
  $("#gameField").empty();
}

function clearCounters() {
  $("#counterScore").html((pointsCount = 0));
  $("#counterTime").html("00:00");
}

function clearName() {
  $("#name").val('');
}


function updateScore(count) {
  $("#counterScore").html(count);
}

function updateTable(results) {
  for (var i = 0; i < results.length; i++) {
    $('tbody').append(createTableRow(results[i]));
  }
}

function showScore(count) {
  $("#score").html(count);
}

function toggleModal() {
  $(".modal").modal("toggle");
}

// PRBtn here stands for pauseResume button

function disablePRBtn() {
  $("#pauseResume").prop('disabled', true);
}

function enablePRBtn() {
  $("#pauseResume").prop('disabled', false);
}

function defaultPRBtn() {
  $("#pauseResume").html("pause");
}
