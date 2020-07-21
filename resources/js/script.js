$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--sections-plans').offset().top}, 1000); 
    });

});