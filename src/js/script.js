document.addEventListener('DOMContentLoaded', () => {
    // Counter

    const btnMinus = [...document.querySelectorAll('[data-action="minus"]')];
    const btnPlus = document.querySelectorAll('[data-action="plus"]');
    const counter = document.querySelectorAll('[data-counter]');

    btnMinus.forEach(item => {
        item.addEventListener('click', () => {
            if (parseInt(counter[i].innerText) > 1) {
                counter[i].innerText = --counter[i].innerText;
            }
        });
    });

    btnPlus.forEach((item, i) => {
        item.addEventListener('click', () => {
            counter[i].innerText = ++counter[i].innerText;
        });
    });

    // Modal

    const headerButton = document.querySelector('.header__button'),
        overlay = document.querySelector('.overlay'),
        modalEmpty = document.querySelector('.modal-registration'),
        closeElem = document.querySelector('.modal-empty__close');

    headerButton.addEventListener('click', () => {
        overlay.classList.add('active');
        modalEmpty.classList.add('active');
        document.body.overflow = 'hidden';

    });

    closeElem.addEventListener('click', () => {
        overlay.classList.remove('active');
        modalEmpty.classList.remove('active');
        document.body.overflow = '';
    });


    // Slider

    new Swiper('.promo-slider', {
        navigation: {
            nextEl: '.promo__arrow-next',
            prevEl: '.promo__arrow-prev'
        },
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000
        },
        speed: 500,
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 10
            },
            577: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1,
                loop: true,
                    autoplay: {
                    delay: 4000
                }
            },
            1199: {
                slidesPerView: 2
            }
        }
    });

    new Swiper('.sliders', {
        navigation: {
            nextEl: '.slider__arrow-next'
        },
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 10
            },
            577: {
                slidesPerView: 1.5
            },
            767: {
                slidesPerView: 2.3
            },
            992: {
                slidesPerView: 3
            },
            1199: {
                slidesPerView: 4
            }
        }
    });

    // Tabs 

    const tabs = document.querySelector('.modal-registration__tabs'),
        tabSelector = document.querySelectorAll('.modal-registration__tab'),
        tabContent = document.querySelectorAll('.modal-registration__content');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('fade');
        });

        tabSelector.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabContent[i].classList.add('fade');

        tabSelector[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabs.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('modal-registration__tab')) {
            tabSelector.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Menu
    const humburger = document.querySelector('.humburger'),
        nav = document.querySelector('.nav'),
        navMenu = document.querySelector('.nav__menu'),
        closeMenu = document.querySelector('.nav__close-icon');

    humburger.addEventListener('click', () => {
        nav.classList.add('active');
        navMenu.classList.add('active');
        document.body.overflow = 'hidden';

    });

    closeMenu.addEventListener('click', () => {
        nav.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.overflow = '';
    });
});


