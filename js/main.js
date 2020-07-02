

//SELECT DOM ITEMS
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuNav=document.querySelector('.menu-nav');
const menuBranding=document.querySelector('.menu-branding');
const navItems=document.querySelectorAll('.nav-item');

//SET THE INITIAL STATE OF THE MENU
let showMenu=false;
menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item=>item.classList.add('show'));
        //RESET MENU STATE
        showMenu=true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item=>item.classList.remove('show'));
        //RESET MENU STATE
        showMenu=false;
    }
}

function clipboard(value){
var code=document.querySelector('.copy');
var codetext=code.textContent;
copyText(codetext)
function copyText(text) {
  navigator.clipboard.writeText(text);
}
if (value=='copy'){
  document.execCommand('copy');
}
}