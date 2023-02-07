
const menuEmail = document.querySelector('.navar-email'); //seleccionar elemento al que le vamos a adr click
const desktopMenu = document.querySelector('.desktop-menu');//llamamos al elemento que va a desaparecer
const menuCarritoIcon = document.querySelector('.navbar-shoping-cart');//llamamos al elemento que va a desaparecer
const menuHamburgesa = document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu')
const aside= document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu); //que hacer cuando le den click
menuHamburgesa.addEventListener('click', toggleMenuHamburgesa);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() { //funcion que hace desaparezca el menuDesktop
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');//llamamos a desktop menu y le decimos que dependiendo de si estatactivado lo desactive y viceversa
}
function toggleMenuHamburgesa() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}