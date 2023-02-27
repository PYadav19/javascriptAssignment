'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').Value = 10;
console.log(document.querySelector('.guess').Value);
*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '⛔No Number')
    );
  }
});
