'use strict';

let score = 20;
let highscore = 0;

let messageQuerry = document.querySelector('.message');
let scoreQuerry = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumberShow = document.querySelector('.number');
let highscoreNumber = document.querySelector('.highscore');
let body = document.querySelector('body');
let boxNumber = document.querySelector('.number');
let guessValue = document.querySelector('.guess');

// Checking in console
console.log(secretNumber, typeof secretNumber);

const displayMessage = function ( message ) {
    messageQuerry.textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(guessValue.value);

    // When there is no input
    if(!guess) {
        displayMessage('No number..😒');
    }

    // When player wins
    else if (guess === secretNumber) {
        displayMessage('Awesome!😜');
        body.style.backgroundColor = '#60b347';
        boxNumber.style.width = '30rem';
        secretNumberShow.textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            highscoreNumber.textContent = highscore;
        }
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess < secretNumber ? 'Too Low..😉' : 'Too High...😜');
            score--;
            scoreQuerry.textContent = score;
        } else {
            displayMessage('You lost the game');
            scoreQuerry.textContent = 0;
            secretNumberShow.textContent = secretNumber;
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    scoreQuerry.textContent = score;
    displayMessage('Start guessing...');
    guessValue.value = '';
    secretNumberShow.textContent = '?';

    // Check
    console.log(secretNumber, typeof secretNumber);
    boxNumber.style.width = '15rem';
    body.style.backgroundColor = '#222';
})
