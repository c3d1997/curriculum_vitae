$(function() {

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            // console.log(1);
            $("nav").addClass("nav_color");

        } else {

            $("nav").removeClass("nav_color")

        }

    });

});
$('.x-log-show').click(function() {
    console.log(1);
    $('.x-log-show').toggleClass('close')
    $('.phone_nav').toggleClass('nav_open')
})