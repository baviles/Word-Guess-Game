$(document).ready(function() {

  var possibleWords = ["murray",
  "taylorsville",
  "millcreek",
  "herriman",
  "sandy",
  "riverton",
  "kearns",
  "magna"]



const maxTries = 10;            

var guessedLetters = [];        
var currentWordIndex;           
var guessingWord = [];          
var remainingGuesses = 0;       
var gameStarted = false;        
var hasFinished = false;             
var wins = 0;                   





function resetGame() {
remainingGuesses = maxTries;
gameStarted = false;


currentWordIndex = Math.floor(Math.random() * (possibleWords.length));


guessedLetters = [];
guessingWord = [];





for (var i = 0; i < possibleWords[currentWordIndex].length; i++) {
    guessingWord.push("_");
    console.log(guessingWord);
}

updateDisplay();
};



function updateDisplay() {

document.getElementById("totalWins").innerText = wins;
document.getElementById("currentWord").innerText = "";
for (var i = 0; i < guessingWord.length; i++) {
    document.getElementById("currentWord").innerText += guessingWord[i];
    console.log(guessingWord[i]);
}
document.getElementById("remainingGuesses").innerText = remainingGuesses;
document.getElementById("guessedLetters").innerText = guessedLetters;
if(remainingGuesses <= 0) {
    document.getElementById("youLose")
    document.getElementById("tryAgain")    
    hasFinished = true;
}
};




document.onkeydown = function(event) {

if(hasFinished) {
    resetGame();
    hasFinished = false;
} else {
   
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLowerCase());
    }
}
};


function makeGuess(letter) {
if (remainingGuesses > 0) {
    if (!gameStarted) {
        gameStarted = true;
        
    }

    
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        evaluateGuess(letter);
    }
}

updateDisplay();
checkWin();
};


function evaluateGuess(letter) {

var positions = [];


for (var i = 0; i < possibleWords[currentWordIndex].length; i++) {
    if(possibleWords[currentWordIndex][i] === letter) {
        positions.push(i);
        console.log(possibleWords[currentWordIndex[i]]);
    }
}


if (positions.length <= 0) {
    remainingGuesses--;
    
} else {
    
    for(var i = 0; i < positions.length; i++) {
        guessingWord[positions[i]] = letter;
        
    }
}
};

function checkWin() {
if(guessingWord.indexOf("_") === -1) {
    document.getElementById("youwin")
    document.getElementById("tryAgain")    
    wins++;
    hasFinished = true;
}
}});