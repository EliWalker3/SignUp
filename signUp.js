const first = document.querySelector('#first_name')
const last = document.querySelector('#last_name')
const email = document.querySelector('#mail')
const phone = document.querySelector('#phone')
const password = document.querySelector('#pass')
const passwordCheck = document.querySelector('#confirm')

const firstError = document.querySelector('#first_name_error')
const lastError = document.querySelector('#last_name_error')
const emailError = document.querySelector('#email_error')
const phoneError = document.querySelector('#phone_error')
const passwordError = document.querySelector('#password_error')
const confirmError = document.querySelector('#confirm_error')

first.addEventListener('input', function (event) {
    if (first.value === '') {
        firstError.textContent = 'Please enter your first name';
    } else {
        firstError.textContent = ''
    }
});

last.addEventListener('input', function (event) {
    if (last.value === '') {
        lastError.textContent = 'Please enter your last name';
    } else {
        lastError.textContent = ''
    }
});

email.addEventListener('input', function (event) {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid e-mail address';
    } else {
        emailError.textContent = ''
    }
});

phone.addEventListener('input', function (event) {
    if (phone.validity.patternMismatch) {
        phoneError.textContent = 'Please enter a valid 10 digit phone number';
    } else if (phone.value === '') {
        phoneError.textContent = 'Please enter a valid 10 digit phone number';
    } else {
        phoneError.textContent = ''
    }
});

password.addEventListener('input', function (event) {
    if (password.validity.patternMismatch) {
        const current = password.value;
        const passCapital = /[A-Z]/g;
        const passNumber = /[0-9]/g;
        let result = '';

        if (passCapital.test(current)) {
            result += ''
        } else {
            result += 'Missing a capital letter. '
            result += '\n';
        }

        if (passNumber.test(current)) {
            result += ''
        } else {
            result += 'Missing at least one number. '
            result += '\n';
        }

        if (current.length < 9) {
            result += 'Password must be at least 9 characters. ';
            result += '\n';
        } else {
            result += '';
        }

        passwordError.textContent = result;

    } else {
        passwordError.textContent = '';
    }
});

passwordCheck.addEventListener('input', function (event) {
    if (passwordCheck.value !== password.value) {
        confirmError.textContent = 'Passwords do not match';
    } else {
        confirmError.textContent = '';
    }
})