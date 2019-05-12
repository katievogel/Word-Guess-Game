var word = "Manatee";
var word2 = "____t__"
var word2 = ['_', '_', '_', '_', 't', '_' ,'_']
var lettersGuess = [];
var 


var chances = 0;
var wins = 0;





document.addEventListener("keydown", anyKey, false);






function anyKey(e) {
    console.log(e);
    // if keyPressed is in the word
    // then show the letter in the document

    document.querySelector('.word').innerText='reset';
}


function setup () {
    // Set the word in the document
    // i want grizzly bear to be on the screen
    var wordSpan = document.querySelector(".word");
    wordSpan.innerHTML = word;


    // Write a function that will create the number of underscores
    // equal to the number of letters in the word
    var letterCount = function (word) {
        var underscores = "";
        for (i=0; i < word.length; i++) {
            // add another underscore
            underscores = underscores + "_";
        }

        wordSpan.innerHTML = underscores;
    }
    letterCount(word);
}

setup();


// Set the chances left to 10
// Set the letters guessed to []