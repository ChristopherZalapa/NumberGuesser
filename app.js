// Game Values
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

// Assign UI Min and Max
minNum.textContent =  min;
maxNum.textContent = max;

// Listen For Guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please Enter A Number Between ${min} & ${max}, 'red`)
    }

    // Check If Won
    if(guess === winningNum) {
        gameOver(true, `${winningNum} Is Correct, You Win!`)
    } else {
        // Wrong Number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            // Game Over - Lost
            gameOver(false, `Game Over, You Lost. The Correct Number was ${winningNum}`)
        } else {
            // Game Continues - Answer Wrong

            // Change Border Color
            guessInput.style.borderColor = 'red'

            // Clear Input
            guessInput.value = '';

            // Tell User Its The Wrong Number
            setMessage(`${guess} Is Not Correct, ${guessesLeft} Guesses Left`, 'red');
        }
    }

});

// Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    //  Disable Input
    guessInput.disable = true;
    // Change Border Color
    guessInput.style.borderColor = color;
    // Set Text Color
    message.style.color = color;
    // Set Message
    setMessage(msg)
}

// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}