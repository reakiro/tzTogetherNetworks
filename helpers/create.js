var rowCount = 5;
var squareCount = 5;

function createRow() {
  return $('<div/>').addClass("divRow row");
}

function createSquare(i, j) {
  return $('<div/>')
    .addClass("divSquare col")
    .attr('id', 'square' + i + j)
    .css('background', randomColor(colors));
}

function createField() {
  for (var i = 1; i <= rowCount; i++) {
    var row = createRow();
    $("#gameField").append(row);
    for (var j = 1; j <= squareCount; j++) {
      row.append(createSquare(i, j));
    }
  }
}

function createTableCell(className, text) {
  return $('<td/>').addClass(className).html(text);
}

function createTableRow(result) {
  return $('<tr/>')
    .append([createTableCell('name', result.name), createTableCell('score', result.score)]);
}
