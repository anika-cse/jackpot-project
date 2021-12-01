$(document).ready(function(){

   // back to top scroll
   var backToTop = $('.back-to-top');
   var navFix = $('nav');

   $(window).on('scroll', function(){
       var scrolling = $(this).scrollTop();

       // scroll back-to-top
       if(scrolling > 300)
       {
           // show
           backToTop.slideDown();
       }
       else{
           // hide
           backToTop.slideUp();
       }

       // navlist fix after 500px
       if(scrolling > 600)
       {
           navFix.addClass('navfix');
       }

       else{
           navFix.removeClass('navfix');
       }
   });


   backToTop.on('click', function(){
       $('html,body').animate({
           scrollTop: 0,
       }, 1500);
   });


    // banner counterup
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });

     // tournament time countdown
     $('#countdown').countdown({
        year: 2021, // YYYY Format
        month: 12, // 1-12
        day: 20, // 1-31
        hour: 10, // 24 hour format 0-23
        minute: 0, // 0-59
        second: 0, // 0-59        
    });


    // tournament slider
    $('.tournament-slider').slick({
        arrows : false,
        slidesToShow : 5,
        slidesToScroll : 1,
        vertical : true ,
        autoplay : true,
        responsive: [
            {
              breakpoint: 576,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },

            {
                breakpoint: 768,
                  settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                }
              },

            {
              breakpoint: 992,
                  settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                }
            },

          ]
    });
    

});