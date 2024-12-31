//extracting info from input box
const form = document.getElementById("form")
const firstname_input = document.getElementById("firstname-input")
const username_input = document.getElementById("username-input")
const email_input = document.getElementById("email-input")
const password_input = document.getElementById("password-input")
const repeat_password_input = document.getElementById("repeat-password-input")

//error messaging in html
const error_message = document.getElementById("error-message")
const error_name = document.getElementById("error-name")
const error_user = document.getElementById("error-user")
const error_email = document.getElementById("error-email")
const error_password = document.getElementById("error-password")
const error_repeat_password = document.getElementById("error-repeat-password")

//this will run once form is submitted through button
form.addEventListener('submit', (e) => {

    if(firstname_input){
        //if we have firstname_input then we are in signup page

        errors = getSignupFormErrors(firstname_input.value, username_input.value, email_input.value, password_input.value, repeat_password_input.value)

    } else {
        //if no firstname_input then that means we are in login page
        errors = getLoginFormErrors(username_input.value, password_input.value)
    }

    if(errors.length > 0)
    {
        //if there are any errors
        e.preventDefault() 
        
        for(var i = 0; i < errors.length;++i)
        {
            if(errors[i] == 'First Name is Required') error_name.innerHTML = errors[i]
            if(errors[i] == 'Username is Required') error_user.innerHTML = errors[i]
            if(errors[i] == 'Email Address is Required') error_email.innerHTML = errors[i]
            if(errors[i] == 'Password is Required') error_password.innerHTML = errors[i]
            if(errors[i] == 'Password must have at least 8 characters') error_password.innerHTML = errors[i]
            if(errors[i] == 'Password does not match repeated password') error_repeat_password.innerHTML = errors[i]
        }

    }
})

function getSignupFormErrors(firstname, username, email, password, repeatPassword) {
    //empty array
    let errors = []

    //check if input boxes are empty or null
    if(firstname === '' || firstname == null) {
        errors.push('First Name is Required')//add error message to array
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(username === '' || username == null) {
        errors.push('Username is Required')//add error message to array
        username_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null) {
        errors.push('Email Address is Required')//add error message to array
        email_input.parentElement.classList.add('incorrect')
    }

    if(password === '' || password == null) {
        errors.push('Password is Required')//add error message to array
        password_input.parentElement.classList.add('incorrect')
    }else if(password.length < 8) {
        errors.push('Password must have at least 8 characters')//add error message to array
        password_input.parentElement.classList.add('incorrect')
    }
    if(password != repeatPassword) {
        errors.push('Password does not match repeated password')//add error message to array
        repeat_password_input.parentElement.classList.add('incorrect')
    }


    return errors;
}

function getLoginFormErrors(username, password) {
    //empty array
    let errors = []

    if(username === '' || username == null) {
        errors.push('Username is Required')//add error message to array
        username_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null) {
        errors.push('Password is Required')
        password_input.parentElement.classList.add('incorrect')
    } else if (password.length < 8) {
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

//array is filtered to remove any null values, only valid elements
const allinputs = [firstname_input, username_input, email_input, password_input, repeat_password_input].filter(input => input != null)

//if user makes any changes to input box then error message may dissapear
allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect'); // Remove the 'incorrect' class
            
            // Clear the specific error message for this input
            if (input === firstname_input) error_name.innerHTML = '';
            if (input === username_input) error_user.innerHTML = '';
            if (input === email_input) error_email.innerHTML = '';
            if (input === password_input) error_password.innerHTML = '';
            if (input === repeat_password_input) error_repeat_password.innerHTML = '';
        }
    });
});
