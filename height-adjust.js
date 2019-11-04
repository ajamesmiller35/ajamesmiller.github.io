$(document).ready(assemble());

var thisHeight = $(window).height();
var thisWidth = $(window).width();


setInterval(function(){
    var newHeight = $(window).height();
    var newWidth = $(window).width();

    if(thisHeight != newHeight){
        thisHeight = $(window).height();
        assemble();
        parallax();
        //console.log('assemble: new height');
    }
    if(thisWidth != newWidth){
        thisWidth = $(window).width();
        assemble();
        parallax();
        //console.log('assemble: new width');
    }
}, 100);


function assemble(){

    //var height = $('#ats-main').height() + $('.top-bar').height() + 100;
    var height = $(window).height();
    var width = $(window).width();
    var windowHeight = height - $('.top-bar').height();
    var sloganHeight = height * .15 + $('#ats-main').height() + 25;
    
    //console.log(height);
    $('#ats-main').css('top', (height*.15));
    $('#slogan').css('top', sloganHeight);
    $('#down-arrow').css('top', windowHeight - 50);

    $('#push').css('height', height);

    if(width < 411){
        $('#slogan').css('top', sloganHeight * .7);
        $('#top-slogan').css('font-size', '.4em');
        $('.action-stmt').css('font-size', '.35em');
        $('#ats-main').css('margin-top', '25px');
        $('#down-arrow').css('top', windowHeight - 20);
        console.log('*.5');
    }

    if(width >= 1092){
        var centerParentHeight = $('#center-parent').height();
        var centerHeight = $('#center').height();
        var centerMargin = (centerParentHeight - centerHeight)/2;
        
        $('#center').css('margin-top', centerMargin);
    }

    var rowHeight20 = $('.height-20').height();
    
    if(width >= 1200){
    
    $('.service-icon').css('height', rowHeight20 * 1.4);
    $('#form-extra').addClass('col-md-8');
    $('#form-extra').removeClass('col-md-12');
    
    }
    else{
        $('.service-icon').css('height', rowHeight20);
    }
}