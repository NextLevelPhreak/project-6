const keyboard = document.querySelector('#qwerty');
const phrases = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const buttonReset = document.getElementsByClassName('.btn__reset');
let missed = 0;
let matches = [];

const phrases = [
  'oceans are huge',
  'javascript is complex',
  'treehouse is fun',
  'trees are important',
  'technology is the future',
];

buttonReset.addEventListener('click', () => {
  overlay.style.display = 'none';
  reset();
});

/* this will choose a random phrase from the array */

function getRandomPhraseAsArray(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length)
  return arr[randomNumber];
}

/* adds the phrase to the display */

function addPhraseToDisplay(arr) {
  arr.forEach(item => {
    let listElement = document.createElement('li');
    listElement.textContent = item;
    if (item !== ' '){
        listElement.classList.add('letter');
    } else {
        listElement.classList.add('space');
      }
phrases.querySelector('ul').append(listElement);
  });
}
