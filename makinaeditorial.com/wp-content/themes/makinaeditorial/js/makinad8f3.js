$=jQuery;
$(window).on('load', function(){
	$('.preload').stop().animate({opacity:0}, null, null, function(){
		$(this).remove();
	})
	for(var i = 0 ; i < $('.nav-link').length; i++){
		var el = $('.nav-link')[i],
		location = window.location.href.split('/'),
		act = $(el).text().toLowerCase(),
		ele = act.match(/[a-zA-Z]+/g)[0],
		loc = location[location.length -2];
		
		console.log(loc);
		if(loc === ele){
			$(el).addClass('current');
		}
		
		
	}
	
	$('a[href$="https://makemake.com.co/"]').click(function(e){
                e.preventDefault();
                var pop = '<div id="makemake-pop" class="fixed-top w-100 h-100 d-flex justify-content-center align-items-center">';
                pop += '<div class="bg-light rounded p-5"><h1>Usted está dejando mákina</h1><p>Pulse continuar para ir a <i>https://makemake.com.co</i></p><button id="continueMake" type="button" class="btn btn-primary mr-3">Continuar<span class="sr-only">ir a makemake</span></button><button type="button" class="btn btn-primary" id="outMakemake">Volver<span class="sr-only">volver</span></button></div>'  
                 
                pop += '</div>';
                $('body').append(pop);
                TweenMax.from($('#makemake-pop'),0.5, {opacity: 0});
                $('#continueMake').click(function(){
                    $('#makemake-pop').remove();
                    window.open('https://makemake.com.co', '_blank');
                });
                $('#outMakemake').click(function(){
                    TweenMax.to($('#makemake-pop'),0.5, {opacity: 0, onComplete:function(){
                        $('#makemake-pop').remove();    
                    }});
                    
                });
                
    })
	
	
	
})