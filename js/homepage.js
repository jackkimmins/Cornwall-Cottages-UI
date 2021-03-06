$(document).ready(function () {
    AOS.init();

    function navbar() {
        if (0 == $(window).scrollTop()) {
            $('.top-title').removeClass('top-title-sm');
            $('.nav').removeClass('nav-sm');
            $('.header-curve').show();
            console.log('top');
        } else {
            $('.top-title').addClass('top-title-sm');
            $('.nav').addClass('nav-sm');
            $('.header-curve').hide();

            console.log('not top');
        }
    }

    $(document).scroll(function () {
        navbar();
    })

    $('#btnShowMenu').click(function (e) {
        e.preventDefault();
        $('.menuItems').toggleClass('menuItems-mobile');
    });

    navbar();
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    autoplay: {
        disableOnInteraction: false,
    },
});