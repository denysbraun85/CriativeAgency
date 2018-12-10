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

/* Clock */
$('#clock').countdown('2018/12/16', function (event) {
    $(this).html(event.strftime(''
        + '<div><span>%w</span><span>Weeks</span></div>'
        + '<div><span>%d</span><span>Days</span></div>'
        + '<div><span>%H</span><span>Hr</span></div>'
        + '<div><span>%M</span><span>Min</span></div>'
        + '<div><span>%S</span><span>Sec</span></div>'
    ));
});