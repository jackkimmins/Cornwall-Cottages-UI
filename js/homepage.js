$(document).ready(function() {
    AOS.init();
    
    $(document).scroll(function() {
        if (0 == $(window).scrollTop())
        {
            $('.top-title').removeClass('top-title-sm');
            $('.nav').removeClass('nav-sm');
            $('.header-curve').show();
            console.log('top');
        }
        else
        {
            $('.top-title').addClass('top-title-sm');
            $('.nav').addClass('nav-sm');
            $('.header-curve').hide();
            
            console.log('not top');
        }
    })

    $('#btnShowMenu').click(function(e) {
        e.preventDefault();
        $('.menuItems').toggleClass('menuItems-mobile');
    });
});