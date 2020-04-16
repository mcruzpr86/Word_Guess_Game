//JavaScript 
    
    // Here i need to place a table with content showing wins, the current word to guess, a hint picture, guesses remaining, letters guessed.
    // create variable with guesses; Character names: Leonardo, Raphael, Michelangelo, Donatello, April, Splinter, Shredder
    // hint colum should contain variation of photo or phrase
    // create guessing area within table
    // answer area with photo of correct guess
    // create guessing loops with the letters of the alphabet
    
   

    var hints = ['Leader of the group', 'Has anger issues', 'Loves pizza', 'Gadget-wiz', 'Reporter', 'Master', 'Enemy of the turtles'];
    var answers = ['Leonardo', 'Raphael', 'Michelangelo', 'Donatello', 'April', 'Splinter', 'Shredder'];
    var guess = 'Leonardo'
    var lettersGuessed = []
    var guessesRemaining = []
    var wins = []
    var lifesLeft = []


    //console.log

    for (var i = 0; i < hints.length; i++) {
      console.log(hints[i]);
    }

    for (var i = 0; i < answers.length; i++) {
      console.log(answers[i]);
   }


    // Random word generator
    
    function characterAnswers() {
      var randomWord = answers[Math.floor (Math.random() * answers.length)];
      console.log (randomWord)

    }

    // Listener
    document.onkeydown = function (event) {
      console.log(event.key)
    }

   


  characterAnswers()
    //Loops go here
    
  document.onkeyup = function(event) {
    var startGame = String.fromCharCode(event.keycode).toLowerCase();
    alert('The Game Has Begun');
  
  }

  document.onkeyup = function(event) {
    var startGame = String.fromCharCode(event.keycode).toLowerCase();
    alert('The Game Has Begun');
  
  }


  
// Jims code to play with
let btn = document.getElementById('btn');
let counter = 0;

btn.onclick = btnClick

function btnClick() {
	let text = document.getElementById('btn');
  
	counter++
	text.innerText = 'I was clicked ' + counter +' times';
}

function reset() {
  let text = document.getElementById('reset');
  text.innerText = 'Restart Game'
	counter = 0;
}




    