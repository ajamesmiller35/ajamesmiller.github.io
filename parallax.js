$(document).ready(function(){

console.log('window width: ' + $(window).width());
console.log('baby image width: ' + $('#bw-baby-img2').width());

var marginLeft = $(window).width() - $('#bw-baby-img2').width();

marginLeft = marginLeft/2;

console.log('marginLeft: ' + marginLeft);

$('#bw-baby-img2').css('margin-left', marginLeft/2); 

var babyWindow = $(window).width() * (700/1663);

if(babyWindow < 408){
    babyWindow = 408;
}

//var imgReposition = $('#bw-baby-img2').height() - babyWindow;

var imgReposition = babyWindow - $('#bw-baby-img2').height();

$('#bw-baby-img2').css('margin-top', imgReposition);

$('#bw-baby').css('height', babyWindow);
$('#family').css('height', babyWindow);

var marginAdjustor = (babyWindow/700);

var topOffset = $('#family').offset().top;


$(window).scroll(function(){
    
    var distance = $(window).scrollTop();
    var windowHeight = $(window).height();
    var textHeight = $('#cap1').height();

    var textMargin = (babyWindow/2) - (textHeight/2);

    var offset = -((1 - distance/windowHeight)/2);
    var offset2 = -((1 - distance/windowHeight)/2);

    $('#bw-baby-img').css('margin-top', (offset * 409 * marginAdjustor));
    
    if((distance + $(window).height()) >= (topOffset)){
        $('#bw-baby-img2').css('margin-top', imgReposition + (offset2 * 409 * marginAdjustor));
        console.log('value: ' + (offset2 * 409 * marginAdjustor));
    }
    

    $('#cap1').css('margin-top', textMargin);
    $('#cap2').css('margin-top', textMargin);
    

});

$(window).scroll(function(){
    /*var extra = $('#about-us').height() + 700;

    $('#bw-baby-img2').css('margin-top', (offset * 409 * marginAdjustor)-600);*/

});

});