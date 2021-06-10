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

const randomNumber = () => Math.floor(Math.random() * 5);

function getRandomPhraseAsArray(arr) {
  let randomArr = arr[randomNumber()];
  return splitArray = randomArr.split([,]);
}

const phraseList = document.querySelector('#phrase ul');
function addPhraseToDisplay (arr) {
  for (i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    phraseList.appendChild(li);
    li.textContent = arr[i];
    if (arr[i] === ' '){
      li.classList.add("space");
    } else {
      li.classList.add("letter");
    }
  }
}

const RandomPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(RandomPhrase);

const letters = document.querySelectorAll('.letter');
const checkLetter = (button) => {
    let matched = null;
    for (i=0; i < letters.length; i++) {
      if (button === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add('show');
        matched = true;
      }
    }
        return matched;
  }

  const liveHeart = document.querySelectorAll('.tries img');
  keyboard.addEventListener('click', e => {
      if (e.target.tagName === "BUTTON") {
        e.target.className = 'chosen';
        e.target.disabled = true;

        const match = checkLetter(e.target.textContent.toLowerCase());
        if (match === null) {
          liveHeart[missed].src = 'images/lostHeart.png';
          missed++;
        }
        checkWin();
      }
      reset();
    });

    function checkWin () {
      const show = document.querySelectorAll('.show');
      let message = document.querySelector('.title');
      if (letters.length === show.length) {
          overlay.className = "win";
          message.textContent = `you win!`;
          overlay.style.display = "flex";
      } else if (missed > 4) {
          overlay.className = "lose";
          message.textContent = `sorry, you lost`;
          overlay.style.display = "flex";
          }
      }

    function reset () {
        buttonReset.textContent = 'play again';
        buttonReset.addEventListener('click', ()=> {
        location.reload();
  });

}
