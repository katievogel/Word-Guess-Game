
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

var letterCount = function (word) {
    var underscores = [];
    for (i=0; i < word.length; i++) {
        underscores[i] = "_";
    }
    document.querySelector('.word').innerHTML = underscores.join(" ");
}
letterCount(word);

setup();
