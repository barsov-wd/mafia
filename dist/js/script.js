document.addEventListener('DOMContentLoaded', () => {
    // Counter

    const btnMinus = document.querySelectorAll('[data-action="minus"]'),
          btnPlus = document.querySelectorAll('[data-action="plus"]');
          counter = document.querySelectorAll('[data-counter]');

    btnMinus.forEach((item, i) => {
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

    // Modal sity 

    const modalTrigger = document.querySelectorAll('[data-city]'),
        overlaySity = document.querySelector('.overlay-sity');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function openModal() {
        overlaySity.classList.add('show');
        overlaySity.classList.remove('hide');
        overlaySity.style.overflow = 'auto';
        document.body.style.overflow = 'hidden';
    }


    function closeModal() {
        overlaySity.classList.add('hide');
        overlaySity.classList.remove('show');
        document.body.style.overflow = '';
    }

    overlaySity.addEventListener('click', (e) => {
        if (e.target === overlaySity || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == "Escape" && overlaySity.classList.contains('show')) {
            closeModal();
        }
    });



    // Modal
    function showModal(trigger, overlay, modal, close) {
        const button = document.querySelector(trigger),
            overlayModal = document.querySelector(overlay),
            modalEmpty = document.querySelector(modal),
            closeElem = document.querySelectorAll(close);

        button.addEventListener('click', () => {
            overlayModal.classList.add('active');
            modalEmpty.classList.add('active');
            document.body.style.overflow = 'hidden';

        });

        closeElem.forEach(item => {
            item.addEventListener('click', () => {
                overlayModal.classList.remove('active');
                modalEmpty.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    showModal('.header__button', '.overlay', '.modal-registration', '[data-closesd]');
    showModal('.mobile-button', '.overlay', '.modal-registration', '[data-closesd]');


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
            nextEl: '.slider__arrow-next',
            prevEl: '.slider__arrow-prev'
        },
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 10
            },
            350: {
                slidesPerView: 1.5
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
          navMenu = document.querySelector('.container__menu'),
          closeMenu = document.querySelector('.nav__close-icon'),
          closeElem = document.querySelectorAll('.nav__menu-item');

    humburger.addEventListener('click', () => {
        nav.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden';

    });

    closeMenu.addEventListener('click', () => {
        nav.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    closeElem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    })
});


