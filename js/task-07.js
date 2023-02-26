const fontSizeControl = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControl.addEventListener('input', onFontSizeChange);
fontSizeControl.value = 16;

function onFontSizeChange(event) {
    const newFontSize = event.currentTarget.value;
    textRef.style.fontSize = `${newFontSize}px`;
};