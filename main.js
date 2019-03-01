
// var masterLibrary = [...dominion, ...dominionRemoved, ...intrigue, ...intrigueRemoved, ...seaside];
var gameLibrary = [...masterLibrary];
var gameCards = [];
var usedCards = [];

function resetGame() {
    gameLibrary = [...masterLibrary];
    gameCards = [];
    usedCards = [];
}


/*generate random number from 0 to # cards in masterLibrary. Changes
based on which expansions are selected*/
function picked() {
    return Math.floor(Math.random() * gameLibrary.length)
}

/*Generate 10 random cards, remove from game masterLibrary, store in
used masterLibrary. This is so we don't get duplicates within 1 session.*/
function buildGame() {
    while (gameCards.length < 10) {
        var x = picked();
        usedCards.push(gameLibrary[x]);
        gameCards.push(gameLibrary[x]);
        gameLibrary.splice(x, 1);
        }
    if (gameLibrary.length < 10) {
        alert(gameLibrary.length + " cards remaining!");
    }
}

function printCards() {
    for (var i = 0; i < 10; i++) {
        console.log(gameCards[i].name);
    }
}

function showCards() {
    if (gameLibrary.length > 0) {
        let myString = ''
        for (var i = 1; i < 11; i++) {
            myString = 'card-' + String(i);
            document.getElementById(myString).innerHTML = gameCards[i-1].name;
        }
    }
}


// Ask user which cards to replace: manual choice, oldest X, newest X,
// random X

// Ask user when to reshuffle used masterLibrary into game masterLibrary:
// immediately, manually, when game masterLibrary empty

/*replace 4 oldest cards*/
function oldestFour() {
    for (i = 0; i < 4; i++) {
        gameCards.shift();
    }
    buildGame();
}
// Ask user how to display cards in play: order drawn, alphabetically,
// by expansion, by cost, random

document.getElementById("start-game").addEventListener("click", resetGame);
document.getElementById("start-game").addEventListener("click", buildGame);
document.getElementById("start-game").addEventListener("click", showCards);
document.getElementById("next-game").addEventListener("click", oldestFour);
document.getElementById("next-game").addEventListener("click", showCards);
document.getElementById("help").addEventListener("click", function() {alert('Start New Game replaces ten cards and resets used cards.\nReplace Four Oldest tracks cards you have used and replaces the oldest four in a new game.')});