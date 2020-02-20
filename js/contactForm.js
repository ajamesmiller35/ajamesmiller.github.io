$(document).ready(function(){
    $('#message-me').click(function(){
        $('#contact-form-box').removeClass('hidden');
    });
    $('.close-button').click(function(){
        $('#contact-form-box').addClass('hidden');
    });
});