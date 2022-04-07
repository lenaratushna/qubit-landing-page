(function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu .menu__list');
    const menuLinks = menu.querySelectorAll('.menu__link');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    });

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', () => {
            if(menu.classList.contains('active')) {
                menu.classList.remove('active');
                burger.classList.remove('active');
            }
        });
    });
}());