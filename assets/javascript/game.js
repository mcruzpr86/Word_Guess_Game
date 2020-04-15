//JavaScript 
    
    // Here i need to place a table with content showing wins, the current word to guess, a hint picture, guesses remaining, letters guessed.
    // create variable with guesses; Character names: Leonardo, Raphael, Michelangelo, Donatello, April, Splinter, Shredder
    // hint colum should contain variation of photo or phrase
    // create guessing area within table
    // answer area with photo of correct guess
    // create guessing loops with the letters of the alphabet
    
   

    var hints = ['Leader of the group', 'Has anger issues', 'Loves pizza', 'Gadget-wiz', 'Reporter', 'Master', 'Enemy of the turtles'];
    var answers = ['Leonardo', 'Raphael', 'Michelangelo', 'Donatello', 'April', 'Splinter', 'Shredder'];
    var guess = []
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

    // Word Generator
    document.onkeydown = function (event) {
      console.log(event.key)
    }

    function characterAnswers () {
      var randomWord = answers[Math.floor (Math.random() * answers.length)];
      console.log (randomWord)

    }

    
    characterAnswers ()
    //Loops go here
    





    