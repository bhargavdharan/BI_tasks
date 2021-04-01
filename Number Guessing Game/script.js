let randomNumber = parseInt((Math.random()*100)+1);
const submit    = document.querySelector(" #submit ");
const userInput = document.querySelector(" #guessField");
const guessSpot = document.querySelector(" .guesses");
const remaining = document.querySelector(" .lastResult");
const startOver = document.querySelector(" .gameResult");
const lowOrHigh = document.querySelector(" .lowOrHigh");

const p = document.createElement("p");
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert("please enter a valid number");
    }
    else if(guess < 1)
    {
        alert('please enter a number greater than 1!');
    }
    else if(guess > 100)
    {
        alert("please enter a number less than 500!");
    }
    else
    {
        //keep record of number of attempted guesses
        previousGuesses.push(guess);
        //check to see if game is over
        if (numGuesses == 11)
        {
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        }
        else
        {
            //display previous guessed numbers
            displayGuesses(guess);
            //check guess and display if wrong
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    //displaying clue to know whether given number is too high or too low
    if(guess == randomNumber)
    {
        displayMessage(`you displayed correctly!`);
    }
    else if(guess < randomNumber)
    {
        displayMessage(`Too low buddy! lets try again`)
    }
    else if(guess > randomNumber)
    {
        displayMessage(`Too high buddy! lets try again`)
    }
}

function displayGuesses(guess)
{
    userInput.value = '';
    guessSpot.innerHTML += `${guess}`;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message)
{
    lowOrHigh.innerHTML = `<h1>${message}</h1>`;
}

function endGame()
{
    //clear user input
    userInput.value = ' ';
    //Disable userInput button
    userInput.setAttribute('disabled', ' ');
    //Display Start new gameButton
        p.classList.add('button');
        p.innerHTML = `<h1 id = "newGame">Start New Game</h1>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function()
    {
        //pick a new random number
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSpot.innerHTML = '';
        lowOrHigh.innerHTML = '';
        remaining.innerHTMl = `${11-numGuesses}`;
        userInput.removeAttribute(`disabled`);
        startOver.removeChild(p);
        playGame = true;
    })
}