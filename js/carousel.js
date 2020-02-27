$(document).ready(function(){
    $('.your-class').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
  });