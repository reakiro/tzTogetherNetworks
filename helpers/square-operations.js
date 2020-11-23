var deadIds = [];

function killSquare(target) {
  target.css('background', 'none').addClass("dead");
}

function livenSquare(id) {
  $("#" + id)
    .css('background', randomColor(colors))
    .removeClass('dead');
}

function quantity() {
    switch (deadIds.length) {
        case 0: case 1: case 2:
            return randomNumber(deadIds.length);
        default:
            return randomNumber(2);   
    }    
}

function addSquare(quantity) {
    for (var i = 0; i < quantity; i++) {
        var id = randomId(deadIds);
        livenSquare(id);
        deadIds.splice($.inArray(id, deadIds), 1);
    }  
}

function logSquare(target) {
  deadIds.push(target.attr('id'))
}