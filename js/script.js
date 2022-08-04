let burger = document.querySelector('.header__burger')
let nav = document.querySelector('.header__nav-wrapper')
const menuItems = nav.querySelectorAll('a')



burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    nav.classList.toggle('nav__visible');
})

/* menuItems.forEach(el => {
    el.addEventListener('click', () => {
        burger.classList.remove('burger__active');
        nav.classList.remove('nav__visible');
    })
}) */




