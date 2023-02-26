const validationInput = document.querySelector('#validation-input');
const inputLength = Number(validationInput.dataset.length);

validationInput.addEventListener('blur', onValidInput);

function onValidInput(event) {

    if (event.currentTarget.value.trim().length === inputLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    };
};
