let burger = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.header__nav-burger');
let burgerLink = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('open-burger');
});

for (link of burgerLink) {
    link.addEventListener('click', function () {
        burgerMenu.classList.toggle('open-burger');
        burger.classList.toggle('active');
    })
}