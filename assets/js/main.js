$(function(){
    var scrollTop = $(window).scrollTop();
       $('#list01').click(function(){
           var captionTop = $('#section1').offset().top;
           $('html, body').animate({scrollTop : captionTop}, 600);
           return false;
       });
   });

$(function(){
    var scrollTop = $(window).scrollTop();
       $('#list02').click(function(){
           var captionTop = $('#section2').offset().top;
           $('html, body').animate({scrollTop : captionTop}, 600);
           return false;
       });
   });

 $(function(){
    var scrollTop = $(window).scrollTop();
       $('#list03').click(function(){
           var captionTop = $('#section3').offset().top;
           $('html, body').animate({scrollTop : captionTop}, 600);
           return false;
       });
   });