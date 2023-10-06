let error=document.querySelector('#error')
let emailInput=document.querySelector('input')
let signup=document.querySelector('.signup')

error.style.display='none'
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

emailInput.addEventListener('input', ()=>{

    const email=emailInput.value
    if(isValidEmail(email))
    {
        error.style.display='block'
        error.style.color='green'
        error.innerHTML='valid email'
    }
    else{
        error.style.display='block'
        error.style.color='red'
        error.innerHTML='invalid email'
    }
})

function isValidEmail(emailInput){
    return emailPattern.test(emailInput)
}
signup.addEventListener('click',()=>{
    error.style.display='none'
})
