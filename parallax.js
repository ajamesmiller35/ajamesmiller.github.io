
$(document).ready(parallax());

function parallax(){

    var winRatio = $(window).width()/$(window).height();
    var welcomeHeight = $('#welcome').height();

    var babyWindow = $(window).width() * (700/1663);

    if(babyWindow < 408){
        babyWindow = 408;
    }
    
    $('#bw-baby').css('height', babyWindow);
    $('#family').css('height', babyWindow);
    
    var marginAdjustor = (babyWindow/700);
    
    var topOffset = $('#family').offset().top;
    
    var marginLeft = $(window).width() - $('#bw-baby-img2').width();
    
    marginLeft = marginLeft/2;
    
    $('#bw-baby-img2').css('margin-left', marginLeft); 

    $(window).scroll(function(){
        
        var distance = $(window).scrollTop();
        var windowHeight = $(window).height();
        var textHeight = $('#cap1').height();
    
        var textMargin = (babyWindow/2) - (textHeight/2);
    
        var offset = -((1 - distance/(windowHeight + welcomeHeight))/2);
        var offset2 = -((1 - distance/windowHeight)/2);

        if(winRatio <= 1.7 && winRatio > 1){
            var imgReposition = babyWindow - $('#bw-baby-img2').height() - 100;
        }
        else if(winRatio <= 1 && winRatio > .55){
            var imgReposition = babyWindow - $('#bw-baby-img2').height() - 75;
            
        }
        else{
            var imgReposition = babyWindow - $('#bw-baby-img2').height() - 50;
            
        }
    
        $('#bw-baby-img2').css('margin-top', imgReposition);

        $('#bw-baby-img').css('margin-top', (offset * 409 * marginAdjustor));

        if((distance + $(window).height()) >= (topOffset)){
            $('#bw-baby-img2').css('margin-top', imgReposition + (offset2 * 409 * marginAdjustor));
        }
        
    
        $('#cap1').css('margin-top', textMargin);
        $('#cap2').css('margin-top', textMargin);
        
    
    });
    
}


