//JavaScript 
    
    // Here i need to place a table with content showing wins, the current word to guess, a hint picture, guesses remaining, letters guessed.
    // create variable with guesses; Character names: Leonardo, Raphael, Michelangelo, Donatello, April, Splinter, Shredder
    // hint colum should contain variation of photo or phrase
    // create guessing area within table
    // answer area with photo of correct guess
    // create guessing loops with the letters of the alphabet
    
   
    var characters = ['Leonardo', 'Raphael', 'Michelangelo', 'Donatello'];
    var answer = '';
    var guessed = [];
    var maxWrong = 6;
    var mistakes = [];
    let wordStatus = null;


    //console.log

    for (var i = 0; i < characters.length; i++) {
      console.log(characters[i]);
   }


    // Random word generator
    
    function characterAnswers() {
      var randomWord = characters[Math.floor (Math.random() * characters.length)];
      console.log (randomWord)

    }

    characterAnswers()

    // Listener
    document.onkeydown = function (event) {
      console.log(event.key)
    }


 



    //Loops go here
    
  document.onkeyup = function(event) {
    var startGame = String.fromCharCode(event.keycode).toLowerCase();
    alert('The Game Has Begun');
  
  }

  document.onkeyup = function(event) {
    var startGame = String.fromCharCode(event.keycode).toLowerCase();
    alert('COWABUNGA DUDES! The Game Has Begun');
  
  }

  function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
  }


//reset the game
function reset() {
  let text = document.getElementById('reset');
  text.innerText = 'Restart Game'
	counter = 0;
}
 

 //Alphabet buttons
document.getElementById('maxWrong').innerHTML = maxWrong;

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}


generateButtons();
guessedWord();
    