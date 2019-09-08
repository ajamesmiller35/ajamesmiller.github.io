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
               scrollTop: ($(target).offset().top - $("#top-nav").height())
             }, 1000);
             console.log('height:' + $('#top-nav').height());
          });
  
          $('#top').on('click', function(e) {
            e.preventDefault();
  
            $('html, body').animate({
              scrollTop: 0
            }, 1000);
         });
        
  
    });
  

  
  })(jQuery);