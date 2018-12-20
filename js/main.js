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
$('#clock').countdown('2018/12/31', function (event) {
    $(this).html(event.strftime(''
        + '<div><span>%w</span><span>Weeks</span></div>'
        + '<div><span>%d</span><span>Days</span></div>'
        + '<div><span>%H</span><span>Hr</span></div>'
        + '<div><span>%M</span><span>Min</span></div>'
        + '<div><span>%S</span><span>Sec</span></div>'
    ));
});

/* Load progress */
$(document).ready(function () {
   NProgress.start();
    setTimeout(function () {
       NProgress.set(0.4);
        }, 1000);
    setTimeout(function () {
        NProgress.set(0.6);
    }, 2000);
    setTimeout(function () {
        NProgress.set(0.8);
    }, 3000);
    setTimeout(function () {
        NProgress.set(1.0);
        NProgress.done();
    }, 4000);
});

/* Stop the default action */
$("a").click(function(event){
    event.preventDefault();
});

/* Scroll To Top Button  */
$(window).scroll(function() {
    if ($(this).scrollTop()>= 500) {        // If page is scrolled more than 500px
        $('#btn-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#btn-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#btn-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/* Animation */
new WOW().init();
