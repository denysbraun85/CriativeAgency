/* Menu @media 768px */
$('.collapse-menu-mobile').on('click',function () {
    $('.collapse-menu-mobile').toggleClass('active');
    $('.menu').toggleClass('active-menu');
});

/* Feedback slider */
$(document).ready(function(){
    $('.feedback-slider').slick({
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1
});
});

/* Cards hover effect */
$('.cards').tilt({
    maxTilt: 10,
    glare: true,
    maxGlare: .4
});
