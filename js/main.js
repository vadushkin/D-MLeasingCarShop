const categoriesItem = document.querySelectorAll('.catalog__categories-item-link');
const cardContent = document.querySelectorAll('.catalog__card-list');


function changeActiveForCategory(event) {
    const categoryTarget = event.currentTarget;
    const button = categoryTarget.dataset.button;

    categoriesItem.forEach((el) => {
        el.classList.remove('catalog__categories-item-link-active');
    });

    categoryTarget.classList.add('catalog__categories-item-link-active');

    cardContent.forEach((el) => {
        el.classList.remove('catalog__card-list-active');
    });

    document.querySelector(`#${button}`).classList.add('catalog__card-list-active');
}


categoriesItem.forEach((el) => {
    el.addEventListener('click', changeActiveForCategory);
})

const menu = document.querySelector('.header__menu-list');
const menuBurger = document.querySelector('.header__menu-burger');


menuBurger.addEventListener('click', () => {
    menu.classList.toggle('header__menu-list-active');
});


const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    effect: "fade",
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});
