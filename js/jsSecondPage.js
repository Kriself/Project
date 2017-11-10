//Все категории меню
var categories = document.querySelector('.categories');
var allCat = document.querySelector('.allCat');
var submenu =document.querySelector('.sub-menu');
categories.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    submenu.style.height='200px';
    allCat.classList.add('show');
});
categories.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    submenu.style.height='83px';
    allCat.classList.remove('show');
});
//конец Все категории меню
