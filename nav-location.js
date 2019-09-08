$.fn.inView = function() {

    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

setInterval(function locate(){

    if($('#push').inView()){
        $('#home-link').addClass('active');
    }
    else{
        $('#home-link').removeClass('active');
    }
    
    if($('#about-us').inView()){
        $('#about-us-link').addClass('active');
    }
    else{
        $('#about-us-link').removeClass('active');
    }

    if($('#services').inView()){
        $('#services-link').addClass('active');
    }
    else{
        $('#services-link').removeClass('active');
    }

    if($('#rates').inView()){
        $('#rates-link').addClass('active');
    }
    else{
        $('#rates-link').removeClass('active');
    }

    if($('#contact').inView()){
        $('#contact-link').addClass('active');
    }
    else{
        $('#contact-link').removeClass('active');
    }

    //console.log('locating...');
}, 100);

