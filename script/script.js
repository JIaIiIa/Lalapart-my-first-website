const btnBurger = document.querySelector('.btn_burger')
const burgerOpen = document.querySelector('.main_nav')
const crossBurger = document.querySelectorAll('.burger_line')
const showLi = document.querySelectorAll('.nav_items')
const navItems = document.querySelectorAll('.nav_items')
const bodyScroll = document.querySelector('body')

btnBurger.addEventListener('click', () => {
    burgerOpen.classList.toggle('open')
    bodyScroll.classList.toggle('open')
})

crossBurger.forEach((crossBurger) => {
    btnBurger.addEventListener('click', () => {
        crossBurger.classList.toggle('open')
    })

})

navItems.forEach((navItems) => {
    btnBurger.addEventListener('click', () => {
        navItems.classList.toggle('open')
    })
})


new Swiper('.koleco_main', {
    speed: 800,
    slidesPerView: 1,
    /* autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }, */
    loop: true,
    parallax: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },

})



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.location_swiper', {
        on: {
            slideChange: function () {
                updateActiveButton(swiper.activeIndex);
                localStorage.setItem('activeSlideIndex', swiper.activeIndex);
            }
        },
        initialSlide: 0,
        speed: 800,
        parallax: true,
    });

    document.querySelector('.go_to_slide_1').addEventListener('click', function () {
        swiper.slideTo(0);
    });

    document.querySelector('.go_to_slide_2').addEventListener('click', function () {
        swiper.slideTo(1);
    });

    document.querySelector('.go_to_slide_3').addEventListener('click', function () {
        swiper.slideTo(2);
    });

    function updateActiveButton(activeIndex) {
        document.querySelectorAll('.btn_acive').forEach(function (button, index) {
            if (index === activeIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    var activeSlideIndex = localStorage.getItem('activeSlideIndex');
    if (activeSlideIndex !== null) {
        swiper.slideTo(parseInt(activeSlideIndex));
        updateActiveButton(parseInt(activeSlideIndex));
    }
});



