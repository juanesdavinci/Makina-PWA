$(document).ready(function()
{		



	
	$("#formAddNewEmailInstitute").submit(function(event)
	{
		event.preventDefault();
		
		
		// ...
		var moveData = 1;

		var inputCode = $('#inputCode').val();
		
		var itVal = $('#itVal').val();
		
		//window.location.href = "/demo2-3.php?tec="+itVal; /* nuevo metodo.. borrar si es necesario */

		
		$( "#submitNewClient" ).prop( "disabled", true );


		$.ajax({ //make ajax request to cart_process.php
			url: "assets/php/bpc.php",
			type: "POST",
			dataType:"text", //expect json value from server
			data: {"addDemoE":moveData, "inputCode":inputCode, "itVal":itVal}
		}).done(function(data){ //on Ajax success

		  	 if(data.startsWith("Agregado"))
		  	 {
		  	 	     //alert(data + " con oops");
				 	// $.Notification.notify('success','top left', 'Perfecto', 'Correcto')
				 	window.location.href = "/demo2-3.php?tec="+itVal;

		  	 }
		  	 else if (data.startsWith("Oops"))
		  	 {
		  	      //alert(data+" sin oops");
				  //$.Notification.notify('error','top left', 'Error', 'Ocurrió un error');
				  window.location.href = "/demo2-2.php?it="+itVal+"&email=false";
		  	 }

		})
		
		

	});
	
	
	$("#revisarTipoDemo").submit(function(event)
	{
		event.preventDefault();
		
		
		
		var selV = $("#mm-redimirselect option:selected").val();
		
		if(selV.startsWith("noInst"))
		{
			window.location.href = "/demo1-2.php";
		}
		else if(selV.startsWith("noSel"))
		{
			//window.location.href = "/demo1-2.php";
		}
		else
		{
			window.location.href = "/demo2-2.php?it="+selV;
		}
			

	});





});









