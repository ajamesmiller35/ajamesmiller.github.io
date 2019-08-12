(function ($) {

    'use strict';
  
    $(document).on('ready', function () {
        // -----------------------------
        //  On Click Smooth scrool
        // -----------------------------
         $('.scrollTo').on('click', function(e) {
             e.preventDefault();
             var target = $(this).attr('href');
             $('html, body').animate({
               scrollTop: ($(target).offset().top - 64)
             }, 1000);
          });        
  
    });
  

  
  })(jQuery);