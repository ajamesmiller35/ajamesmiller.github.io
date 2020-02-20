$(document).ready(function(){

    position();
    
    $(window).resize(function(){
        position();
    });

});

function position(){
    let sWidth = $(window).width();

    //control nav icon visibility
    if(sWidth < 576){
        $('#nav-icon-tr').removeClass('hidden');
    }
    else{
        $('#nav-icon-tr').addClass('hidden');
    }

    if(sWidth < 992){
        $('#left-col').removeClass('col-lg-5');
        $('#left-col').addClass('col-lg-6');
        $('#right-col').removeClass('col-lg-7');
        $('#right-col').addClass('col-lg-6');
        $('#left-col').removeClass('border-right');
    }
    else{
        $('#left-col').removeClass('col-lg-6');
        $('#left-col').addClass('col-lg-5');
        $('#right-col').removeClass('col-lg-6');
        $('#right-col').addClass('col-lg-7');
        $('#left-col').addClass('border-right');
    }
    
}