//global variables//
var wins = 0;
var losses = 0;

var chancesLeft;

//creates underscores for each letter in the word to guess, and sets the number of chances a player has to guess the word, by looping through each word// 
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

//the list of words in the game. probably should hide this elsewhere so snoops don't use the inspect tools in the browser to find it... cheaters.//
var wordList = ['GRIZZLYBEAR', 'MONGOOSE', 'CHEETAH', 'ARMADILLO', 'ORCA', 'ORYX', 'KANGAROO', 'PANGOLIN', 'MANATEE', 'QUOKKA', 'WALLABE', 'OSTRICH', 'BISON', 'LION', 'COBRA', 'RATTLESNAKE', 'ANENOME', 'PORCUPINE', 'HEDGEHOG', 'WOLF', 'TIGER', 'HYENA', 'DOLPHIN', 'CRAB', 'LOBSTER', 'KOALA', 'JELLYFISH', 'ALBATROSS', 'CONDOR', 'RAVEN', 'NARWHAL', 'LEOPARD', 'JAGUAR', 'CAPYBARA', 'CROCODILE', 'ALLIGATOR', 'GAZELLE', 'CAMEL', 'HORSE', 'DONKEY'];

var word = randomWord(wordList);
letterCount(word);

//simple function chooses a random word from the word list//
function randomWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

//records the number of wrong guesses. also converts to uppercase letters to always ensure matching functionality. does not allow numbers, special characters either. populates the wrong guesses on the page so the player can see what they tried already. duplicate guesses are now allowed or counted against the player//
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
//button functions to generate the new word and clear the letters that have been guessed//
document.querySelector('.btn').onclick =
    function nextGame() {
        word = randomWord(wordList);
        var newUnderscores = letterCount(word);
        $('.letters-chosen').html("");
        wrongGuess = [];
    };

//this needle in a haystack function is used in the larger function above to check if letters are or are not in in a word
function contains(haystack, needle) {
    for (var i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
};

//records the number of wins and losses//
function victory() {
    if (chancesLeft >= 0 && !contains(underscores, '_')) {
        wins++;
        $('.games-won').html(wins);
        console.log("chances left: " + chancesLeft);
        console.log("wins: " + wins);
    } else  if (chancesLeft <=0 && contains(underscores, '_')) {
        losses++;
        $('.games-lost').html(losses);
        console.log("losses: " + losses);
    }
}
