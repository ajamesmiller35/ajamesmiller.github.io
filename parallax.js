$.fn.inView = function() {

    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

$(document).ready(parallax());

function parallax(){

    //var winRatio = $(window).width()/$(window).height();
    var welcomeHeight = $('#welcome').height();

    var babyWindow = $(window).width() * (700/1663);

    if(babyWindow < 408){
        babyWindow = 408;
    }
    
    $('#bw-baby').css('height', babyWindow);
    $('#family').css('height', babyWindow);
    
    var marginAdjustor = (babyWindow/700);
    
    //var topOffset = $('#family').offset().top;
    
    var marginLeft = ($(window).width() - $('#bw-baby-img2').width())/2;    
    $('#bw-baby-img2').css('margin-left', marginLeft); 
    //$('#bw-baby-img').css('margin-left', marginLeft); 


    $(window).scroll(function(){
        
        var distance = $(window).scrollTop();
        var windowHeight = $(window).height();
        var textHeight = $('#cap1').height();
    
        var textMargin = (babyWindow/2) - (textHeight/2);
    
        //var offset = -((1 - distance/(windowHeight + welcomeHeight))/2);
        //var offset2 = -((1 - distance/windowHeight)/2);
    
        //$('#bw-baby-img2').css('margin-top', imgReposition);

        //$('#bw-baby-img').css('margin-top', (offset * 409 * marginAdjustor));

        if($('#bw-baby').inView()){
            console.log('TOP: ' + $('#bw-baby-img2').offset().top);
            let diff = $('#bw-baby').offset().top - windowHeight - $(window).scrollTop();
            $('#bw-baby-img').css('margin-top', diff * .15);
        }

        if($('#family').inView()){
            console.log('TOP: ' + $('#bw-baby-img2').offset().top);
            let diff = $('#family').offset().top - windowHeight - $(window).scrollTop();
            $('#bw-baby-img2').css('margin-top', diff * .15);
        }
        
    
        $('#cap1').css('margin-top', textMargin);
        $('#cap2').css('margin-top', textMargin);
        
    
    });
    
}


