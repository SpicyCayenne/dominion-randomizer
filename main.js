// Get list of cards by expansion
var dominion = [
    {
        name: 'Cellar',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Chapel',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Moat',
        cost: 2,
        types: ['action', 'reaction']
    },
    {
        name: 'Harbinger',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Merchant',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Vassal',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Village',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Workshop',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Bureaucrat',
        cost: 4,
        types: ['action', 'attack']
    },
    {
        name: 'Gardens',
        cost: 4,
        types: ['victory']
    },
    {
        name: 'Militia',
        cost: 4,
        types: ['action', 'attack']
    },
    {
        name: 'Moneylender',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Poacher',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Remodel',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Smithy',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Throne Room',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Bandit',
        cost: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Council Room',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Festival',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Laboratory',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Library',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Market',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Mine',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Sentry',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Witch',
        cost: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Artisan',
        cost: 6,
        types: ['action']
    }
]
var dominionRemoved = [
    {
        name: 'Chancellor',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Woodcutter',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Feast',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Spy',
        cost: 4,
        types: ['action', 'attack']
    },
    {
        name: 'Thief',
        cost: 4,
        types: ['action', 'attack']
    },
    {
        name: 'Adventurer',
        cost: 6,
        types: ['action']
    }
]
var intrigue = [
    {
        name: 'Courtyard',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Lurker',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Pawn',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Masquerade',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Shanty Town',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Steward',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Swindler',
        cost: 3,
        types: ['action', 'attack']
    },
    {
        name: 'Wishing Well',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Baron',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Bridge',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Conspirator',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Diplomat',
        cost: 4,
        types: ['action', 'reaction']
    },
    {
        name: 'Ironworks',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Mill',
        cost: 4,
        types: ['action', 'victory']
    },
    {
        name: 'Mining Village',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Secret Passage',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Courtier',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Duke',
        cost: 5,
        types: ['victory']
    },
    {
        name: 'Minion',
        cost: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Patrol',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Replace',
        cost: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Torturer',
        cost: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Trading Post',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Upgrade',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Harem',
        cost: 6,
        types: ['treasure', 'victory']
    },
    {
        name: 'Nobles',
        cost: 6,
        types: ['action', 'victory']
    }
]
var intrigueRemoved = [
    {
        name: 'Secret Chamber',
        cost: 2,
        types: ['action', 'reaction']
    },
    {
        name: 'Great Hall',
        cost: 3,
        types: ['action', 'victory']
    },
    {
        name: 'Coppersmith',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Scout',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Saboteur',
        cost: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Tribute',
        cost: 5,
        types: ['action']
    }
]
var seaside = [
    {
        name: 'Embargo',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Haven',
        cost: 2,
        types: ['action', 'duration']
    },
    {
        name: 'Lighthouse',
        cost: 2,
        types: ['action', 'duration']
    },
    {
        name: 'Native Village',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Pearl Diver',
        cost: 2,
        types: ['action']
    },
    {
        name: 'Ambassador',
        cost: 3,
        types: ['action', 'attack']
    },
    {
        name: 'Fishing Village',
        cost: 3,
        types: ['action', 'duration']
    },
    {
        name: 'Lookout',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Smugglers',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Warehouse',
        cost: 3,
        types: ['action']
    },
    {
        name: 'Caravan',
        cost: 4,
        types: ['action', 'duration']
    },
    {
        name: 'Cutpurse',
        cost: 4,
        types: ['action', 'attack']
    },
    {
        name: 'Island',
        cost: 4,
        types: ['action', 'victory']
    },
    {
        name: 'Navigator',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Pirate Ship',
        cost: 4,
        types: ['action', 'attack']
    },
    {
        name: 'Salvager',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Sea Hag',
        cost: 4,
        types: ['action', 'attack']
    },
    {
        name: 'Treasure Map',
        cost: 4,
        types: ['action']
    },
    {
        name: 'Bazaar',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Explorer',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Ghost Ship',
        cost: 5,
        types: ['action', 'attack']
    },
    {
        name: 'Merchant Ship',
        cost: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Outpost',
        cost: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Tactician',
        cost: 5,
        types: ['action', 'duration']
    },
    {
        name: 'Treasury',
        cost: 5,
        types: ['action']
    },
    {
        name: 'Wharf',
        cost: 5,
        types: ['action', 'duration']
    },
]
// Ask user which expansions to play

// Build game masterLibrary from chosen expansions
var masterLibrary = [...dominion, ...dominionRemoved, ...intrigue, ...intrigueRemoved, ...seaside];
var gameCards = [];
var usedCards = [];

function resetGame() {
    masterLibrary = [...dominion, ...dominionRemoved, ...intrigue, ...intrigueRemoved, ...seaside];
    gameCards = [];
    usedCards = [];
}


/*generate random number from 0 to # cards in masterLibrary. Changes
based on which expansions are selected*/
function picked() {
    return Math.floor(Math.random() * masterLibrary.length)
}

/*Generate 10 random cards, remove from game masterLibrary, store in
used masterLibrary. This is so we don't get duplicates within 1 session.*/
function buildGame() {
    while (gameCards.length < 10) {
        var x = picked();
        usedCards.push(masterLibrary[x]);
        gameCards.push(masterLibrary[x]);
        masterLibrary.splice(x, 1);
        }
    if (masterLibrary.length < 10) {
        alert(masterLibrary.length + " cards remaining!");
    }
}

function printCards() {
    for (var i = 0; i < 10; i++) {
        console.log(gameCards[i].name);
    }
}

function showCards() {
    let myString = ''
    for (var i = 1; i < 11; i++) {
        myString = 'card-' + String(i);
        document.getElementById(myString).innerHTML = gameCards[i-1].name;
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