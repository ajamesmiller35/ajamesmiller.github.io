$(document).ready(function(){

    position();
    
    $(window).resize(function(){
        position();
    });

});

function position(){
    let sWidth = $(window).width();
    let sHeight = $(window).height();

    //set privacy practices height
    $('#privacy-practices').css('height', (sHeight * .8));

    //control nav icon visibility
    if(sWidth < 576){
        $('#nav-icon-tr').removeClass('hidden');
    }
    else{
        $('#nav-icon-tr').addClass('hidden');
    }
    
}