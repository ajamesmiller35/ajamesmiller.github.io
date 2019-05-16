(function ($) {

    'use strict';
  
    $(document).on('ready', function () {
        // -----------------------------
        //  On Click Smooth scrool
        // -----------------------------
         $('.scrollTo').on('click', function(e) {
             e.preventDefault();
             var target = $(this).attr('href');

             var height = $("#rg-banner").height() + 15;

             if ($(window).scrollTop() >= height && $('body').width() < 1100){
                $('html, body').animate({
                    scrollTop: ($(target).offset().top - $("#rg-banner").height() - 60)
                  }, 1000);
             }
             else if ($(window).scrollTop() >= height && $('body').width() >= 1100){
                $('html, body').animate({
                    scrollTop: ($(target).offset().top - $("#nav-height").height() - 125)
                  }, 1000);
             }
             else{
                $('html, body').animate({
                    scrollTop: ($(target).offset().top - $('#rg-banner').height() + 20)
                  }, 1000);
                  console.log('height:' + $('#rg-banner').height());
             }

          });

          $('#top').on('click', function(e) {
            e.preventDefault();
            
               $('html, body').animate({
                   scrollTop: 0
                 }, 1000);
         });
        
  
    });
  
  
  })(jQuery);