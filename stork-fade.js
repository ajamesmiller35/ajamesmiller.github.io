
    $(window).scroll(function(){
        var a = $(window).scrollTop();
        var b = $(window).height();
        var ratio = a/b * 1.5;
        //console.log(ratio);
        $('#ats-main').css('opacity', (1-ratio));
        $('#slogan').css('opacity', (1-ratio));

    });
