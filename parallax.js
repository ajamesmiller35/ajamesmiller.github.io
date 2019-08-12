$(document).ready(function(){


//set height of display window for parallax images
var babyWindow = $(window).width() * (700/1663);

//set minimum height of display window for parallax images to 408 px
if(babyWindow < 408){
    babyWindow = 408;

}

//var imgReposition = $('#bw-baby-img2').height() - babyWindow;


//move the image inside the window down so the bottom-most portion of the image is visible in the window 
var imgReposition = babyWindow - $('#bw-baby-img2').height();
$('#bw-baby-img2').css('margin-top', imgReposition);

$('#bw-baby').css('height', babyWindow);
$('#family').css('height', babyWindow);

var marginAdjustor = (babyWindow/700);

//get the distance from the #family display window to the top of the page
var topOffset = $('#family').offset().top;

var marginLeft = $(window).width() - $('#bw-baby-img2').width();

marginLeft = marginLeft/2;

$('#bw-baby-img2').css('margin-left', marginLeft); 

$(window).scroll(function(){
    
    var distance = $(window).scrollTop();
    var windowHeight = $(window).height();
    var textHeight = $('#cap1').height();

    var textMargin = (babyWindow/2) - (textHeight/2);

    var offset = -((1 - distance/windowHeight)/2);
    //var offset2 = -((1 - distance/windowHeight)/2);

    $('#bw-baby-img').css('margin-top', (offset * 409 * marginAdjustor));
    
    if((distance + $(window).height()) >= (topOffset)){
         if(babyWindow > 408){
             $('#bw-baby-img2').css('margin-top', imgReposition + (offset * 409 * marginAdjustor));
         }
         else{
            $('#bw-baby-img2').css('margin-top', (imgReposition + (offset * 409 * marginAdjustor) - 100));
         }
    }
    

    $('#cap1').css('margin-top', textMargin);
    $('#cap2').css('margin-top', textMargin);
    

});

$(window).scroll(function(){
    /*var extra = $('#about-us').height() + 700;

    $('#bw-baby-img2').css('margin-top', (offset * 409 * marginAdjustor)-600);*/

});

});