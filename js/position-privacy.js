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

    if($(window).width() > 1197 && $(window).height() < 950){
        $('#f3').css('width', '50%');
    }
    else{
        $('#f3').css('width', '100%');
    }

    /*let colOffset = $('#left-col').offset().top + $('#left-col').height();

    if(colOffset > $(window).height()){
        let diff = colOffset - $(window).height();
        let f3Height = $('#f3').height();
        let f3NewHeight = f3Height - diff - 60
        $('#f3').css('height', f3NewHeight);
        $('#f3').css('width', f3NewHeight * 444 / 488);
    }
    else{
        //$('#f3').css('width', '100%');
    }*/
    
}