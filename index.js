const reader = document.querySelector('#boton');
// const input = document.getElementById('email').value;

const valid = document.querySelector('#valid')
const error = document.querySelector('#error')
const err_img = document.querySelector('#err-signal')



const err_signal = document.querySelector('#err_signal')

const validator = (input) => {
    const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let isValid = expReg.test(input)


    if (isValid == true){
        valid.innerHTML = 'Email valid. \n You will be redirected'
        console.log(' correcto')
    }else{
        error.innerHTML = 'Please enter a correct email'

        err_img.style.display = 'flex'
        console.log(' incorrecto')
    }
    

}




// reader.addEventListener('click', verificador(input, msj))




