//Variables

let possibleWords = [ 
"murray",
"taylorsville",
"millcreek",
"herriman",
"sandy",
"riverton",
"kearns",
"magna"]


//Empty variables to store variables 
let currentWord = 'taylorsville'
let wins = 0
let guessesRemaining = 11
let lettersGuessed = []

//All functions
function initGame() {
  assignCurrentWord()
  setEventListeners()
  updateDOM()
}
initGame()
function wordHasBeenGuessed(){
  for(let i=0; i<currentWord.length; i++){
    if(lettersGuessed.includes(currentWord[i])){
      
    } else {
      return false
    }
  }
  return true
}

//Generates random word from posibleWords array
function assignCurrentWord() {
  const index = Math.floor(Math.random() * ((possibleWords.length -1) - 0 + 1)) + 0;
  currentWord = possibleWords[index]
}
function setEventListeners(){
  document.onkeyup = function(e){
    lettersGuessed.push(e.key)
    if(wordHasBeenGuessed()){
      initGame()
      wins++
      document.getElementById("wins-count").textContent = wins
    }
    shouldGuessesGoDown(e.key)
    console.log(currentWord, lettersGuessed, guessesRemaining)
    updateDOM()
    checkIfUserLost()
  }
}
function checkIfUserLost(){
  if(guessesRemaining <= 0){
    alert('you lost')
  }
}
function shouldGuessesGoDown(letterGuessed){
  if(!currentWord.includes(letterGuessed)){
    guessesRemaining = guessesRemaining - 1
  }
}
function updateDOM(){
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining
  document.getElementById("letters-guessed").innerHTML = lettersGuessed
  showLettersOrDashes()
}
function showLettersOrDashes() {
  let displayWord = ''
  for(let i=0; i<currentWord.length; i++){
    if(lettersGuessed.includes(currentWord[i])){
      displayWord = displayWord + currentWord[i] + ' '
    } else {
      displayWord = displayWord + '_' + ' '
    }
  }
  document.getElementById("display-word").textContent = displayWord
}




