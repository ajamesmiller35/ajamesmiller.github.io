$(document).ready(function(){

    position();
    
    $(window).resize(function(){
        position();
    });


});

function position(){
    let sWidth = $(window).width();

    //control nav icon visibility
    if(sWidth < 575){
        $('#nav-icon-tr').removeClass('hidden');
        $('#tl-white').removeClass('hidden');
        $('#tl-white').addClass('block');
        $('#tl-blue').addClass('hidden');
        $('#tl-blue').removeClass('block');
    }
    else{
        $('#nav-icon-tr').addClass('hidden');
        $('#tl-white').addClass('hidden');
        $('#tl-white').removeClass('block');
        $('#tl-blue').addClass('block');
        $('#tl-blue').removeClass('hidden');
    }

    //move content base on logo size
    if(sWidth < 575){
        let logoHeight = $('#tl-white').height();
        $('#testimonials').css('margin-top', logoHeight + 25);
    }
    else{
        $('#testimonials').css('margin-top', 0);
    }

    //switch image based on screen size
    let ratio = 5760/3840;
    let screenRatio = $(window).width()/($(window).height() - $('#footer-results').height());
    if(screenRatio < ratio){
        if(sWidth < 575){
            $('#body-results').css('background-image', 'unset');
        }
        else{
            $('#body-results').css('background-image', `url('images/f2-dark-sm.jpg')`);
        }
    }
    else{
        $('#body-results').css('background-image', `url('images/f2-dark.jpg')`);
    }

    /*if( $('#nav-box').height() > $('#title-box').offset().top){
        $('#title-box').css('top', ( $('#nav-box').height() + 10 ));
        console.log('nav fix');
    }
    else{
        $('#title-box').css('top', 0);
    }*/
    
}