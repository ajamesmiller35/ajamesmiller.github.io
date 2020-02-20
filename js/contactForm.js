$(document).ready(function(){
    $('#message-me').click(function(){
        $('#contact-form-box').removeClass('hidden');
    });
    $('.close').click(function(){
        $('#contact-form-box').addClass('hidden');
    });
});