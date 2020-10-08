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

wordList = {
    'animal': {
        'species': {
            'GRIZZLYBEAR': [
                { 'fact': 'bear fact' },
                { 'pic': 'bear image' }],
            'MONGOOSE': [
                { 'fact': 'mongoose fact' },
                { 'pic': 'mongoose fact' }],
            'CHEETAH': [
                { 'fact': 'cheetah pic' },
                { 'pic': 'cheetah pic' }],
            'ARMADILLO': [
                { 'fact': 'armadillo fact' },
                { 'pic': 'armadillo pic' }],
            'ORCA': [
                { 'fact': 'orca fact' },
                { 'pic': 'orca pic' }],
            'ORYX': [
                { 'fact': 'oryx fact' },
                { 'pic': 'oryx pic' }],
            'KANGAROO': [
                { 'fact': 'kangaroo fact' },
                { 'pic': 'kangaroo pic' }],
            'PANGOLIN': [
                { 'fact': 'pangolin fact' },
                { 'pic': 'pangolin pic' }],
            'MANATEE': [
                { 'fact': 'manatee fact' },
                { 'pic': 'manatee pic' }],
            'QUOKKA': [
                { 'fact': 'quokka fact' },
                { 'pic': 'quokka pic' }],
            'WALLABE': [
                { 'fact': 'wallabe fact' },
                { 'pic': 'wallabe pic' }],
            'OSTRICH': [
                { 'fact': 'ostrich fact' },
                { 'pic': 'ostrich pic' }],
            'BISON': [
                { 'fact': 'bison fact' },
                { 'pic': 'bison pic' }],
            'LION': [
                { 'fact': 'lion fact' },
                { 'pic': 'lion pic' }],
            'COBRA': [
                { 'fact': 'cobra fact' },
                { 'pic': 'cobra pic' }],
            'RATTLESNAKE': [
                { 'fact': 'rattlesnake fact' },
                { 'pic': 'rattlesnake pic' }],
            'ANENOME': [
                { 'fact': 'anenome fact' },
                { 'pic': 'anenome pic' }],
            'PORCUPINE': [
                { 'fact': 'porcupine fact' },
                { 'pic': 'porcupine pic' }],
            'HEDGEHOG': [
                { 'fact': 'hedgehog fact' },
                { 'pic': 'hedgehog pic' }],
            'WOLF': [
                { 'fact': 'wolf fact' },
                { 'pic': 'wolf pic' }],
            'TIGER': [
                { 'fact': 'tiger fact' },
                { 'pic': 'tiger pic' }],
            'HYENA': [
                { 'fact': 'hyena fact' },
                { 'pic': 'hyena pic' }],
            'DOLPHIN': [
                { 'fact': 'dolphin fact' },
                { 'pic': 'dolphin pic' }],
            'CRAB': [
                { 'fact': 'crab fact' },
                { 'pic': 'crab pic' }],
            'LOBSTER': [
                { 'fact': 'lobster fact' },
                { 'pic': 'lobster pic' }],
            'KOALA': [
                { 'fact': 'koala fact' },
                { 'pic': 'koala pic' }],
            'JELLYFISH': [
                { 'fact': 'jellyfish fact' },
                { 'pic': 'jellyfish pic' }],
            'ALBATROSS': [
                { 'fact': 'albatross fact' },
                { 'pic': 'albatross pic' }],
            'CONDOR': [
                { 'fact': 'condor fact' },
                { 'pic': 'condor pic' }],
            'RAVEN': [
                { 'fact': 'raven fact' },
                { 'pic': 'raven pic' }],
            'NARWHAL': [
                { 'fact': 'narwhal fact' },
                { 'pic': 'narwhal pic' }],
            'LEOPARD': [
                { 'fact': 'leopard fact' },
                { 'pic': 'leopard pic' }],
            'JAGUAR': [
                { 'fact': 'jaguar fact' },
                { 'pic': 'jaguar pic' }],
            'CAPYBARA': [
                { 'fact': 'capybara fact' },
                { 'pic': 'capybara pic' }],
            'CROCODILE': [
                { 'fact': 'crocodile fact' },
                { 'pic': 'crocodile pic' }],
            'ALLIGATOR': [
                { 'fact': 'alligator fact' },
                { 'pic': 'alligator pic' }],
            'GAZELLE': [
                { 'fact': 'gazelle fact' },
                { 'pic': 'gazelle pic' }],
            'CAMEL': [
                { 'fact': 'camel fact' },
                { 'pic': 'camel pic' }],
            'HORSE': [
                { 'fact': 'horse fact' },
                { 'pic': 'horse pic' }],
            'DONKEY': [
                { 'fact': 'donkey fact' },
                { 'pic': 'donkey pic' }],
        }
    }
}

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
