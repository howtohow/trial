//VALIDATE
var password=document.forms['form']['password'];
var password_error=document.getElementById('password_error');

password.addEventListener('textInput',pass_verify);

function validate(){
    if(password.value !='nimda'){
        password.value='';
        password.focus();
        console.log('ges');
        return false;
    }
}
function pass_verify(){
    if(password.value =='nimda'){
        password.focus();
        return true;
    }
}