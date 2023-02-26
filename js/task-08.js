const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onLoginButtonClick);

function onLoginButtonClick(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Усі поля повинні бути заповнені!");
    } else {
        const userDetails = {
            email: email.value,
            password: password.value,
        };
        console.log(userDetails);
        formRef.reset();
    };
};