const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeatpassword_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    //checking for errors in signup and login
    let errors = []

    if(username_input) {
        errors = getSignupFormErrors(username_input.value, email_input.value, password_input.value, repeatpassword_input.value)
    } else {
        errors = getLoginFormErrors()
    }

    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    } else{
        e.preventDefault()
        window.location.href = "login.html"
    }

})

function getSignupFormErrors(username, email, password, repeatpassword){
    let errors = []

    if(username == '' || username == null) {
        errors.push('Username required')
        username_input.parentElement.classList.add('incorrect')
    }
    if(email == '' || email == null) {
        errors.push('Email required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password == '' || password == null) {
        errors.push('Password required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(repeatpassword == '' || repeatpassword == null) {
        errors.push('Repeated password required')
        repeatpassword_input.parentElement.classList.add('incorrect')
    }
    if(password !== repeatpassword){
        errors.push('Passwords do not match')
        password_input.parentElement.classList.add('incorrect')
        repeatpassword_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 10){
        errors.push('Password needs atleast 10 characters')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

const all = [username_input, email_input, password_input, repeatpassword_input]

all.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})
