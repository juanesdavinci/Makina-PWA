(function($){
    $(window).resize(function() {
        var width = $('.main-thumb').css('width');
        $('.main-thumb').css('height', width);
    });
    $(document).ready(function(){
        /*$('.clientes-cover').owlCarousel({
          
          items:5, 
          autoplay: true,
          nav: true,
          //navText: ["<img src='img/myprevimage.png'>","<img src='img/mynextimage.png'>"]
        });*/
        var width = $('.main-thumb').css('width');
        $('.main-thumb').css('height', width);
        
		$('.cover-filter').click(function(){
			var clase=  $(this).text().toLowerCase();
                for(var i = 0; i < $('.cover-filter').length; i++){
                    $('.cover-filter').removeClass('mainColor');
                }
                $(this).addClass('mainColor');
				for(var i = 0; i < $('.grid-item').length; i++){
				var element = $('.grid-item')[i];
                    $(element).show();
                    if(clase !== 'todos'){
                        if(!$(element).hasClass(clase)){
                            $(element).hide();
                        }    
                    }else{
                        $(element).show();
                    }	
				}
			}
		);
        
        
        $("#typed-strings").typed({
            strings: ["Producimos y distribuimos <span class='mainColor-bg ' id='typed-2' style='color: white;'> contenidos digitales </span>"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            //stringsElement: "#typed-strings",
            // typing speed
            typeSpeed: 70,
            // time before typing starts
            //startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 50,
            // loop
            //loop: true,
            // false = infinite
            //loopCount: 5,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {
                $('.banner-text').css('padding-bottom', '10%')
                /*$('#typed-2').typed({
                     strings: ['Contenidos digitales', 'Historias digitales']
                })*/
            },
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
	   });
        
        
        
    });//fin del ready
    var altura = parseInt($('.intro-text').css('height'));
    var tween = TweenMax.to($('.intro-text'), 60, {y: '-=' + altura,ease:Linear.easeNone, onComplete:function(){
        
        //$('.intro-text div').clone().appendTo( ".intro-text" );
            tween.restart();    
        
    }});
    TweenMax.delayedCall(3, function(){
        $('.intro-text div').clone().appendTo( ".intro-text" );    
    })
    /*$('.intro-text').on('touchstart mouseover', function(){
        TweenMax.to($('.intro-text, .logobn'), 0.5, {opacity: 0.3});
        TweenMax.to($('.logobn'), 0.5, {opacity: 1});
        tween.pause();
    });
    $('.intro-text').on('touchend touchleave mouseout',function(){
        TweenMax.to($('.intro-text'), 0.5, {opacity: 1});
        TweenMax.to($('.logobn'), 0.5, {opacity: 0});
        tween.resume();
    });*/
})(jQuery)
