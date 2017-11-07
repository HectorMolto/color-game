const colors =
  ['rgb(255, 0, 0)',
    'rgb(0 ,255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(255, 0, 255)',
    'rgb(0, 255, 255)'];

const squares = document.querySelectorAll('.square');
const pickedColor = colors[3];

document.querySelector('#colorDisplay').textContent = pickedColor;


for (let i = 0; i < squares.length; i += 1) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function () {
    if (this.style.backgroundColor === pickedColor) {
      alert('You win');
    } else {
      alert('Try again');
      this.style.visibility = 'hidden';
    }
  });
}
