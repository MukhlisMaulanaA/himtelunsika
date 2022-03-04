const swiper = new Swiper(".info-slide", {
    // Optional parameters
    grabCursor: true,
    direction: 'horizontal',
    loop: false,
    centeredSlides: false,
    autoHeight: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active')
};

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
};
