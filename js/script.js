let burger = document.querySelector('.header__burger')
let nav = document.querySelector('.header__nav-wrapper')
const menuItems = nav.querySelectorAll('a')



burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    nav.classList.toggle('nav__visible');
})

menuItems.forEach(el => {
    el.addEventListener('click', () => {
        burger.classList.remove('burger__active');
        nav.classList.remove('nav__visible');
    })
})



let toggles = document.getElementsByClassName('label');
let contentDiv = document.getElementsByClassName('content');
let accordion = document.querySelectorAll('.contentBx')


for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            accordion[i].classList.remove('active');
            accordion[i].classList.add('active');


        }
        else {
            contentDiv[i].style.height = "0px";
            accordion[i].classList.remove('active');
            /* accordion[i].classList.add('active'); */
        }
        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                accordion[j].classList.remove('active');

                /* accordion[j].classList.add('active'); */

            }
        }

    })
}











