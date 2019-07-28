$(document).ready(function(){
    //var height = $('#ats-main').height() + $('.top-bar').height() + 100;
    var height = $(window).height();
    var width = $(window).width();
    var windowHeight = height - $('.top-bar').height();
    var sloganHeight = height * .25 + $('#ats-main').height() + 50;
    console.log(height);
    $('#ats-main').css('top', (height*.25));
    $('#slogan').css('top', sloganHeight);

    $('#push').css('height', height);

    var rowHeight20 = $('.height-20').height();
    

    if(width >= 1200){
    
    $('.window').css('height', windowHeight);
    $('.service-icon').css('height', rowHeight20 * 1.4);
    $('#form-extra').addClass('col-md-8');
    $('#form-extra').removeClass('col-md-12');
    
    }
    else{
        $('.service-icon').css('height', rowHeight20);
    }
});