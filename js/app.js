const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('phrase');
const buttonReset = document.querySelector('.btn__reset');
let missed = 0;

let phrases = [
  'oceans are huge',
  'javascript is complex',
  'treehouse is fun',
  'trees are important',
  'technology is the future',
];

const overlay = document.querySelector('#overlay');
buttonReset.addEventListener('click', () => {
  overlay.style.display = 'none';
});

/* this will choose a random phrase from the array */

function getRandomPhraseAsArray(arr) {
  let randomNumber = Math.floor(Math.random() * 5);
  let randomArr =arr[randomNumber()];
  return splitArray = randomArr.split('');
}

/* adds the phrase to the display */
