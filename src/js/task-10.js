function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

const arrayRef = [];

function createBoxes() {
  const amount = inputRef.value;
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newBoxes = document.createElement('div');
    newBoxes.style.backgroundColor = getRandomHexColor();
    newBoxes.style.width = `${size}px`;
    newBoxes.style.height = `${size}px`;
    size += 10;
    arrayRef.push(newBoxes);
  }
  boxesRef.append(...arrayRef); 
};

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
};   