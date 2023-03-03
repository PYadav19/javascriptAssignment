'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0EL = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;

const playerSwitch = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

diceEl.classList.add('hidden');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // Generating random number roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //displaying dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice != 1) {
    currentScore += dice;
    // console.log(currentScore);
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0EL.textContent = currentScore;
  } else {
    //switching player
    playerSwitch();
  }
});

// Holding functionality
btnHold.addEventListener('click', function () {
  // add current score to the active player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //compare if score >= 100
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // switch the player
    playerSwitch();
  }
});

console.log('i have done it yeahhhh.....');
