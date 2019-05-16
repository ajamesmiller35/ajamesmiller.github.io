//This function changes the size of the top logo and navigation area when the page is scrolled down
$(document).ready(function(){

  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('.dd-top-logo').addClass('dd-top-logo-scrolled');
      $('#top img').css('display', 'block');
    } else  if (scrollTop < 100){
      $('.dd-top-logo').removeClass('dd-top-logo-scrolled');
      $('#top img').css('display', 'none');
    } 
    
  }); 
  
});