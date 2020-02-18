$(document).ready(function(){

    position();
    
    $(window).resize(function(){
        position();
    });


});

function position(){
    let sWidth = $(window).width();

    //set index backdrop height
    if(sWidth < 575){
        let iBHeight = $(window).width() / 3124 * 2863;
        $('#index-backdrop').css('height', iBHeight);
        $('#index-backdrop').css('background-position', '0 ' + $('#nav-box').height() + 'px');
    }
    else if(sWidth < 802){
        let iBHeight = $(window).width() / 12.6 * 9.64;
        $('#index-backdrop').css('height', iBHeight);
        $('#index-backdrop').css('background-position', '0 ' + $('#nav-box').height() + 'px');
    }
    else{
    let iBHeight = $(window).width() / 15.24 * 8.86;
    if(iBHeight > ($(window).height() * .75)){
        iBHeight = $(window).height() * .75;
        $('#index-backdrop').css('background-position', '0 ' + $('#nav-box').height() + 'px');
    }
    $('#index-backdrop').css('height', iBHeight);
    }

    //set title-box position
    let top = 0;
    let left = 15;
    if(sWidth < 1360){
        left = (sWidth + 140)/100;
        top = (sWidth + 382)/ 9.2;
    }
    $('#title-box').css('left', left + '%');
    $('#title-box').css('top', top);

    let archOffset = $('#content-index').offset().top;
    let titleOffset = $('#title-box').offset().top + $('#title-box').height();
    let offsetDiff = titleOffset - archOffset;
    console.log(offsetDiff);
    if( titleOffset > archOffset){
        $('#title-box').css('top', top - offsetDiff);
        console.log('true');
    }

    if( $('#nav-box').height() > $('#title-box').offset().top){
        $('#title-box').css('top', ( $('#nav-box').height() + 10 ));
        console.log('nav fix');
    }
    
    //set frp logo width
    let logoWidth = 400;
    if(sWidth < 1360){
        logoWidth = sWidth * 400 / 1360;
        if(logoWidth < 170){
            logoWidth = 170;
        }
    }
    $('#title-logo').css('width', logoWidth);

    //set background green height
    totalHeight = $('#index-backdrop').height() + $('#background-green-index').height();
    if(totalHeight < $(window).height()){
        let newHeight = $(window).height() - $('#index-backdrop').height();
        $('#background-green-index').css('height', newHeight);
    }

    //control nav icon visibility
    if(sWidth < 576){
        $('#nav-icon-tr').removeClass('hidden');
    }
    else{
        $('#nav-icon-tr').addClass('hidden');
    }
}