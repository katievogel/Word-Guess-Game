var wins = 0;

var chancesLeft;

var underscores = [];
var letterCount = function (word) {
    underscores = [];
    for (i = 0; i < word.length; i++) {
        underscores[i] = "_";
        chancesLeft = word.length + 3;
        document.querySelector('.num-chances').innerHTML = chancesLeft;
    }
    document.querySelector('.word').innerHTML = underscores.join(" ");
}

var wordList = ['GRIZZLYBEAR', 'MONGOOSE', 'CHEETAH', 'ARMADILLO', 'ORCA', 'ORYX', 'KANGAROO', 'PANGOLIN', 'MANATEE', 'QUOKKA', 'WALLABE', 'OSTRICH', 'BISON', 'LION', 'COBRA', 'RATTLESNAKE', 'ANENOME', 'PORCUPINE', 'HEDGEHOG', 'WOLF', 'TIGER', 'HYENA', 'DOLPHIN', 'CRAB', 'LOBSTER', 'KOALA', 'JELLYFISH', 'ALBATROSS', 'CONDOR', 'RAVEN', 'NARWHAL', 'LEOPARD', 'JAGUAR', 'CAPYBARA', 'CROCODILE', 'ALLIGATOR', 'GAZELLE', 'CAMEL', 'HORSE', 'DONKEY'];
var word = randomWord(wordList);
letterCount(word);

function randomWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

var wrongGuess = [];
document.onkeyup = function (guess) {
    if (chancesLeft > 0) {
        if (!guess.key.toUpperCase().match(/^[A-Za-z]$/)) {
            return;
        }
        var found = false;
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess.key.toUpperCase()) {
                found = true;
                underscores[j] = guess.key.toUpperCase();
                document.querySelector('.word').innerHTML = underscores.join(" ");
            }
        }
        if (!found) {
            if (!contains(wrongGuess, guess.key.toUpperCase())) {
                wrongGuess.push(guess.key.toUpperCase());
                document.querySelector('.letters-chosen').innerHTML = wrongGuess.join(" ");
                chancessLeft = chancesLeft--;
                document.querySelector('.num-chances').innerHTML = chancesLeft;
            } else {
                return;
            }   
        }
        victory();
    }
};

document.querySelector('.btn').onclick =
    function nextGame() {
        word = randomWord(wordList);
        var newUnderscores = letterCount(word);
        $('.letters-chosen').html("");
        wrongGuess = [];
    };


function contains(haystack, needle) {
    for (var i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
};

function victory() {
    if (chancesLeft >= 0 && !contains(underscores, '_')) {
        wins++;
        $('.games-won').html(wins);
        console.log("chances left: " + chancesLeft);
        console.log("wins: " + wins);
    }
}
