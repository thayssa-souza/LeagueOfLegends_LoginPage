const inputUser = document.querySelector('.username');
const inputPass = document.querySelector('.password');
const buttonLogin = document.querySelector('.boxArrow');

function loginValidate()
{
    if(inputUser.value != "" && inputPass.value.lenght >= 8){
        buttonLogin.classList.remove('arrowRight');
        buttonLogin.classList.add('boxArrow')
    }
     else{
        button.classList.remove('boxArrow');
        button.classList.add('arrowRight');
     }

}

inputUser.addEventListener('input', loginValidate);
inputPass.addEventListener('input', loginValidate);
buttonLogin.addEventListener('button', loginValidate);

loginValidate();