const {log}=console;
const passField = document.getElementById('password');
const passConfirm = document.getElementById('confirm-password');
const errorSpan = document.querySelector('.error-span')
const createBtn = document.querySelector('.create-btn')

passConfirm.addEventListener('keyup', onkeyup);
passField.addEventListener('keyup', onkeyup);

//password validation
function onkeyup(e){
    if(passField.value===passConfirm.value){
        passField.classList.remove('bordered');
        passConfirm.classList.remove("bordered");
        errorSpan.textContent = '';
        passField.setCustomValidity("");
    }else{
        passField.classList.add('bordered');
        passConfirm.classList.add('bordered');
        passField.setCustomValidity('Passwords do not match');
        errorSpan.textContent = '*Passwords do not match'
    }
}