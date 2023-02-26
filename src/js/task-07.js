const fontSizeControl = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControl.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
    const newFontSize = event.currentTarget.value;
    textRef.style.fontSize = `${newFontSize}px`;
};