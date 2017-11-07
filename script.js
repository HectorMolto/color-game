// Create and empty array to fill with 3 or 6 colors afterwards
const colors = [];
const squares = document.querySelectorAll('.square');
const h1 = document.querySelector('h1');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
const modes = document.querySelectorAll('.mode');

// We need to declare the winning color as global to change it after every reset
let pickedColor;
let modeGame = 6;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
  // FIXME: Possible refactor?
  const red = getRandomInt(0, 256);
  const greem = getRandomInt(0, 256);
  const blue = getRandomInt(0, 256);
  const color = `rgb(${red}, ${greem}, ${blue})`;

  return color;
}

function addColors() {
  colors.length = 0;
  for (let i = 0; i < modeGame; i += 1) {
    colors.push(getRandomColor());
  }
}

function pickRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function fillColors() {
  for (let i = 0; i < modeGame; i += 1) {
    squares[i].classList.remove('hidden');
    squares[i].style.backgroundColor = colors[i];
    if (modeGame === 3) {

    }
  }
}

function winningSquare() {
  for (let i = 0; i < modeGame; i += 1) {
    squares[i].style.backgroundColor = pickedColor;
    h1.style.backgroundColor = pickedColor;
    result.style.color = pickedColor;
  }
}

function addClickColor() {
  for (let i = 0; i < squares.length; i += 1) {
    squares[i].addEventListener('click', function guessColorResponse() {
      if (this.style.backgroundColor === pickedColor) {
        document.querySelector('#result').textContent = 'You Win!';
        winningSquare();
      } else {
        document.querySelector('#result').textContent = 'Try Again!';
        this.classList.add('hidden');
      }
    });
  }
}

function resetColors() {
  h1.style.backgroundColor = 'steelblue';
  result.textContent = '';
  result.style.color = 'firebrick';
}

// We start a new game, picking new colors, and setting everything like default
function resetGame() {
  addColors();
  fillColors();
  resetColors();

  pickedColor = pickRandomColor();

  document.querySelector('#colorDisplay').textContent = pickedColor;
}

function removeSelectedMode() {
  for (let i = 0; i < modes.length; i += 1) {
    modes[i].classList.remove('selected');
  }
}

for (let i = 0; i < modes.length; i += 1) {
  modes[i].addEventListener('click', function () {
    removeSelectedMode();
    this.classList.add('selected');
    if (this.getAttribute('id') === 'easy') {
      for (let x = 0; x < squares.length; x += 1) {
        squares[x].classList.add('hidden');
      }
      modeGame = 3;
    } else {
      modeGame = 6;
    }
    resetGame();
  });
}

reset.addEventListener('click', function () {
  resetGame();
});

function initialize() {
  resetGame();
  addClickColor();
}

initialize();
