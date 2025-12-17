console.log("hello")
let form = document.querySelector('form')
let email = document.querySelector('.einput')
let pass = document.querySelector('.pinput')
let email_error = document.querySelector('.email-error') 
let pass_error = document.querySelector('.pass-error') 
let tick = document.querySelector('.tick')
let tick2 = document.querySelector('.tick_2')
let evalue = ""
let pvalue = ""
console.log(form)

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page reload
    
    // Get the current value from the input elements
    let currentEmail = email.value; 
    let currentPassword = pass.value;

    if(currentEmail.trim() === "") {
        email.style.border = '2px solid red'
        email_error.style.display = 'block'
    }
    if(currentEmail.includes('@')) {
        email.style.border = '2px solid green'
        email_error.style.display = 'none'
        tick.style.display = 'block'
    }

    if(currentPassword.trim().length < 6) {
        pass.style.border = '2px solid red'
        pass_error.style.display = 'block'
    } 
    else {
        pass.style.border = '2px solid green'
        pass_error.style.display = 'none'
        tick2.style.display = 'block'
    }

});

