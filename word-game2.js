
function setup (word) {
    var listElement = document.querySelector('.word')
    for (var i = 0; i < word.length; i++) {
        listElement.append(word[i]);
    } 
}
var wordList = ['GRIZZLYBEAR', 'MONGOOSE', 'CHEETAH', 'ARMADILLO', 'ORCA', 'ORYX', 'KANGAROO', 'PANGOLIN', 'MANATEE', 'QUOKKA', 'WALLABE', 'OSTRICH', 'BISON', 'LION', 'COBRA', 'RATTLESNAKE', 'ANENOME', 'PORCUPINE', 'HEDGEHOG', 'WOLF', 'TIGER', 'HYENA', 'DOLPHIN', 'CRAB', 'LOBSTER', 'KOALA', 'JELLYFISH', 'ALBATROSS', 'CONDOR', 'RAVEN', 'NARWHAL', 'LEOPARD', 'JAGUAR', 'CAPYBARA', 'CROCODILE', 'ALLIGATOR', 'GAZELLE', 'CAMEL', 'HORSE', 'DONKEY'];
var word = randomWord(wordList);
setup(word);

function randomWord (wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

var underscores = [];
var letterCount = function (word) {
    for (i = 0; i < word.length; i++) {
        underscores[i] = "_";
    }
    document.querySelector('.word').innerHTML = underscores.join(" ");
}
letterCount(word);
var wrongGuess =[];
var chancesLeft = word.length + 3;
document.querySelector('.num-chances').innerHTML = chancesLeft;
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
        wrongGuess.push(guess.key.toUpperCase());
        document.querySelector('.letters-chosen').innerHTML = wrongGuess.join(" ");
        chancessLeft = chancesLeft--;
        document.querySelector('.num-chances').innerHTML = chancesLeft;
    } 
    

    }
}
