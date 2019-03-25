let gameLibrary = [];
let gameCards = [];
let usedCards = [];
let expansionList = ['Dominion', 'Dominion 2E', 'Dominion 1E Removed Cards', 'Intrigue', 'Intrigue 2E', 'Intrigue 1E Removed Cards', 'Seaside', 'Alchemy', 'Prosperity', 'Cornucopia', 'Hinterlands', 'Dark Ages', 'Guilds', 'Adventures', 'Empires', 'Nocturne', 'Renaissance', 'Promo'];
let gameExpansions = [];

function resetGame() {
    setExpansions();
    gameCards = [];
    usedCards = [];
}

//Shows and hides the list of expansions
function showExpansions() {
    let expansionForm = document.getElementById("expansions");
    if (expansionForm.style.visibility == 'visible') {
        expansionForm.style.visibility = 'hidden';
    } else {
        expansionForm.style.visibility = 'visible';
    }
}

function pickExpansions() {
    for (let item of expansionList) {
        let expansion = document.getElementById(item).checked;
        let expIndex = gameExpansions.indexOf(item);
        if (expansion === true && expIndex === -1) {
            gameExpansions.push(item);
        } else if (expansion === false && expIndex !== -1) {
            gameExpansions.splice(expIndex, 1);
        }
    }
}

//sets the game library to all possible cards if no expansions are chosen
//otherwise checks each card in master library, adds it to game library if its expansion is selected
//and the card is not already in the library
function setExpansions() {
    if (gameExpansions.length === 0) {
        gameLibrary = [...masterLibrary];   
    } else {
        for (card of masterLibrary) {
            if (gameExpansions.indexOf(card.expansion) != -1 && gameLibrary.indexOf(card) == -1) {
                gameLibrary.push(card);
            }
        }
    }
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
        if (gameCards[i].expansion == 'Dark Ages') {
            shelters = true;
        }
        if (gameCards[i].expansion == 'Prosperity') {
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
document.getElementById("pick-expansions").addEventListener("click", showExpansions);
document.getElementById("submitExpansions").addEventListener("click", pickExpansions);
document.getElementById("submitExpansions").addEventListener("click", setExpansions);
document.getElementById("submitExpansions").addEventListener("click", showExpansions);