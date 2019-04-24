// Your code here
let dodger = document.getElementById('dodger')

const moveDodgerLeft = () => {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

const moveDodgerRight = () => {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
  else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
})
