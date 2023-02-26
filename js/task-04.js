const valueRef = document.querySelector('#value');
const buttonDecRef = document.querySelector('[data-action="decrement"]');
const buttonIncRef = document.querySelector('[data-action="increment"]');

buttonDecRef.addEventListener('click', onButtonDecClick);
buttonIncRef.addEventListener('click', onButtonIncClick);

let counterValue = 0;

function onButtonDecClick(event) {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

function onButtonIncClick(event) {
    counterValue += 1;
    valueRef.textContent = counterValue;
};
