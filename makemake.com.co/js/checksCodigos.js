

var esFavorito;
var textoURL;

$(document).ready(function() {

	$("#inputUOther").prop('disabled', true);
	
	$('#frmTest input[type=checkbox]').on('change', function ()
	{
		url();
	
	});
	
	$('#campoOtroId input[type=text]').on('change', function ()
	{
		var tempTextoA = $('#textoOtroI').attr('value');
		var campoTextoA = $('#inputUOther').val();
		
		$('#textoOtroI').val(tempTextoA + campoTextoA);
	
	});


});



function url()
{
	textoURL = '';
	var firstTime = true;
	var ponerAmp = false;
	
	$('#check1ID input:checked').each(function() 
	{
		
		if(firstTime)
		{
		    textoURL= textoURL + "soy promotor(a) de lectura";
		    firstTime = false;
		    ponerAmp = true;
		}
		textoURL= textoURL + "" + $(this).attr('value');
		textoURL= textoURL + ";";
		
		
	});
	
	if(!firstTime)
	{
		textoURL = textoURL.slice(0,-1);
	}
	firstTime = true;
	
	////////////////////////////////////////////////////////
	$('#check2ID input:checked').each(function() 
	{
	
	
		if(firstTime)
		{
			if(ponerAmp)
			{
				textoURL= textoURL + " y ";
			}
		    textoURL= textoURL + "soy padre/madre de familia";
		    firstTime = false;
		    ponerAmp = true;
		}
		textoURL= textoURL + "" + $(this).attr('value');
		textoURL= textoURL + ";";
		//alert( $(this).attr('value'));
	});
	
	if(!firstTime)
	{
		textoURL = textoURL.slice(0,-1);
	}
	firstTime = true;
	
	////////////////////////////////////////////////////////
	$('#check3ID input:checked').each(function() 
	{
	
		if(firstTime)
		{
			if(ponerAmp)
			{
				textoURL= textoURL + " y ";
			}
		    textoURL= textoURL + "soy estudiante";
		    firstTime = false;
		    ponerAmp = true;
		}
		textoURL= textoURL + "" + $(this).attr('value');
		textoURL= textoURL + ";";
		//alert( $(this).attr('value'));
	});
	
	if(!firstTime)
	{
		textoURL = textoURL.slice(0,-1);
	}
	firstTime = true;
	
	////////////////////////////////////////////////////////
	$('#check4ID input:checked').each(function() 
	{
	
		if(firstTime)
		{
			if(ponerAmp)
			{
				textoURL= textoURL + " y ";
			}
		    textoURL= textoURL + "soy profesor(a)";
		    firstTime = false;
		    ponerAmp = true;
		}
		textoURL= textoURL + "" + $(this).attr('value');
		textoURL= textoURL + ";";
		//alert( $(this).attr('value'));
	});
	
	if(!firstTime)
	{
		textoURL = textoURL.slice(0,-1);
	}
	firstTime = true;
	
	
	////////////////////////////////////////////////////////
	$('#check5ID input:checked').each(function() 
	{
	
		if(firstTime)
		{
			if(ponerAmp)
			{
				textoURL= textoURL + " y ";
			}
		    textoURL= textoURL + "quiero MakeMake para mi institución";
		    firstTime = false;
		    ponerAmp = true;
		}
		textoURL= textoURL + "" + $(this).attr('value');
		textoURL= textoURL + ";";
		//alert( $(this).attr('value'));
	});
	
	if(!firstTime)
	{
		textoURL = textoURL.slice(0,-1);
	}
	firstTime = true;


	////////////////////////////////////////////////////////
	
	var hayOtro = false;
	
	$('#check6ID input:checked').each(function() 
	{
	
		if(firstTime)
		{
			if(ponerAmp)
			{
				textoURL= textoURL + " y ";
			}
		    textoURL= textoURL + "otra: ";
		    hayOtro = true;
		    $("#inputUOther").prop('disabled', false);

		    
		    
		    firstTime = false;
		    ponerAmp = true;
		}
		
		
		textoURL= textoURL + "" + $(this).attr('value');
		textoURL= textoURL + ";";
		//alert( $(this).attr('value'));
	});
	
	if(!firstTime)
	{
		textoURL = textoURL.slice(0,-1);
	}
	firstTime = true;
	
	
	if(!hayOtro)
	{
		$("#inputUOther").prop('disabled', true);
	}
	
	
	////////////////////////////////////////////////////////


	
	if(!firstTime)
	{
		textoURL = textoURL.slice(0,-1);
	}
	firstTime = true;


	$('#textoOtroI').val(textoURL);


	
	//alert(textoURL);

}





