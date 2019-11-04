

$("#contact-form").submit(function(event){
    
    
    var prueba = $("#inputEmail").val();
    var pruebaConfirm = $("#inputEmailConfirm").val();
    var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    var usernameFilter = /^[a-zA-Z0-9]+$/;
    var username = $("#inputName").val();
    //var password1= $("#passwordI").val();
    //var password2 = $("#passwordCI").val();
    
	if(username.length < 5)
	{
		event.preventDefault();
		$.Notification.notify('warning','top left', 'Oh oh!','El campo de nombre tiene menos de 5 caracteres');
		$("#usernameI").css('background-color','rgba(255, 209, 0, 0.27)');
	}

	else if (!emailFilter.test(prueba) ) 
	{
		event.preventDefault();
		$.Notification.notify('warning','top left', 'Oh oh!','El correo ingresado no tiene el formato esperado');
		$("#contactoCorreo").css('background-color','rgba(255, 209, 0, 0.27)');
	
	}

	else if(prueba != pruebaConfirm)
	{
		event.preventDefault();
		$.Notification.notify('warning','top left', 'Oh oh!','El correo ingresado no coincide con el de confirmación');
		$("#contactoCorreo").css('background-color','rgba(255, 209, 0, 0.27)');
		$("#contactoCorreoConfirm").css('background-color','rgba(255, 209, 0, 0.27)');
	}

	else
	{
		
		$("#contactoCorreo").css('background-color','rgba(255,255,255,1)');
	    	$("#contact-form").submit();
	}
    
     // If all the validations succeeded
});


