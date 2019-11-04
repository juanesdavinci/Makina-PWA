(function($){
    var altura = parseInt($('.intro-text').css('height'));
    var tween = TweenMax.to($('.intro-text'), 60, {y: '-=' + altura,ease:Linear.easeNone, onComplete:function(){
        
        //$('.intro-text div').clone().appendTo( ".intro-text" );
            tween.restart();    
        
    }});
    /*TweenMax.delayedCall(3, function(){
        $('.intro-text div').clone().appendTo( ".intro-text" );    
    })*/
    $('.intro-text').mouseover(function(){
        tween.pause();
    })
    $('.intro-text').mouseout(function(){
        tween.resume();
    })
    
    $(document).ready(function(){
        $('.testimonials').owlCarousel({
          
          items:3,
          nav: true,
          autoplay: true,
          center: true,
          loop: true,
          responsive : {
                // breakpoint from 0 up
                0 : {
                    items:1
                },
                /*breakpoint from 768 up
                768 : {
                    items:2
                },
                // breakpoint from 768 up
                960 : {
                    items:3
                }*/
           },
           //navText: ["<img src='img/nosotros-prev.png'>","<img src='img/nosotros-next.png'>"]
    });
    });
})(jQuery)

