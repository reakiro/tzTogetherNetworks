function getName() {
    return $("#name").val();
}

function getScore() {
    return $("#score").text();
}

$("#saveResults").click(() => {
    var results = [];
    results.push({
        name: getName(),
        score: getScore()
    });
    updateTable(results);
    toggleModal();
});