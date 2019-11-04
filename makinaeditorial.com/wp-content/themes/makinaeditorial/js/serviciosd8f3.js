(function($){
	
	$.each($('.su-carousel'), function(key, el){
		destino=$(el).parents('div.bloque-servicio').children('div.carrusel');
		galeria=$(el).clone(true);
		$(el).addClass('d-none');
		destino.html(galeria);
	});

})(jQuery)