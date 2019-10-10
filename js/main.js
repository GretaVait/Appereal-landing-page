const submitBtn = document.querySelector('button[type="submit"]');
const emailInput = document.querySelector('input[type="email"]');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
}

submitBtn.addEventListener('click', () => {
    if (validateEmail(emailInput) === false) { //if(!validateEmail())
        emailInput.style.backgroundImage = 'url(images/icon-error.svg)';
        emailInput.style.paddingRight = '110px';
        emailInput.style.border = '2px solid hsl(0, 93%, 68%)';
    }
});