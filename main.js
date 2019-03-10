let gameLibrary = [...masterLibrary];
let gameCards = [];
let usedCards = [];

function resetGame() {
    gameLibrary = [...masterLibrary];
    gameCards = [];
    usedCards = [];
}
// Ask user which expansions to play
function listExpansions() {
    let selectedExpansions = [];
    for (i = 0; i < gameLibrary.length; i++) {
        if (selectedExpansions.indexOf(gameLibrary[i].expansion) == -1) {
            selectedExpansions.push(gameLibrary[i].expansion);
        }
    }
    let formattedExpansions = [];    
    for (let expansion of selectedExpansions) {
      if (expansion == 'dominionRemoved') {
        formattedExpansions.push('Dominion - Removed Cards');
      } else if (expansion == 'intrigueRemoved') {
        formattedExpansions.push('Intrigue - Removed Cards');
      } else {
        formattedExpansions.push(expansion[0].toUpperCase()+expansion.slice(1));
      }
    }
    alert('You are playing with: \n' + formattedExpansions.join('\n'));
}

/*generate random number from 0 to # cards in masterLibrary. Changes
based on which expansions are selected*/
function picked() {
    return Math.floor(Math.random() * gameLibrary.length)
}

/*Generate 10 random cards, remove from gameLibrary, store in
usedLibrary. This is so we don't get duplicates within 1 session.*/
function buildGame() {
    while (gameCards.length < 10) {
        let x = picked();
        usedCards.push(gameLibrary[x]);
        gameCards.push(gameLibrary[x]);
        gameLibrary.splice(x, 1);
        }
    if (gameLibrary.length < 10) {
        alert(gameLibrary.length + " cards remaining!");
    }
}

function printCards() {
    for (let i = 0; i < 10; i++) {
        console.log(gameCards[i].name);
    }
}

function showCards() {
    let shelters = false;
    let plats = false;
    if (gameLibrary.length > 0) {
        let cardId = ''
        for (let i = 1; i < 11; i++) {
            cardId = 'card-' + String(i);
            document.getElementById(cardId).innerHTML = gameCards[i-1].name;
        }
    }
    for (i = 0; i < gameCards.length; i++) {
        if (gameCards[i].expansion == 'darkAges') {
            shelters = true;
        }
        if (gameCards[i].expansion == 'prosperity') {
            plats = true;
        }
        
    }
    if (shelters == true) {
        document.getElementById("shelter").style.visibility = "visible";
    } else {
        document.getElementById("shelter").style.visibility = "hidden";
    }
    if (plats == true) {
        document.getElementById("plat").style.visibility = "visible";
    } else {
        document.getElementById("plat").style.visibility = "hidden";
    }
}


// Ask user which cards to replace: manual choice, oldest X, newest X,
// random X

// Ask user when to reshuffle used masterLibrary into gameLibrary:
// immediately, manually, when gameLibrary empty

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
document.getElementById("pick-expansions").addEventListener("click", listExpansions);