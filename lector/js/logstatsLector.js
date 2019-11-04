/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

var selectedID;
var selectedName;

var packageNameT;

$(function () 
{

	setInterval(setTSConc, 50000);
	setInterval(setStatsSession, 9000);
	setInterval(setStatsLibro, 21000);
	

});


function setTSConc() 
{
    // Setup jQuery ajax mock:
    $.ajax({
        url: "../../assets/php/bpc.php",
		type: "POST",
		data: {"updateTS":"1"}
		
    }).done(function(data)
    { //on Ajax success
		
		//alert("hola");

	})
}

function setStatsSession() 
{
    // Setup jQuery ajax mock:
    $.ajax({
        url: "../../assets/php/bpc.php",
		type: "POST",
		data: {"updateSession":"1"}
		
    }).done(function(data)
    { //on Ajax success
		
		//alert("hola");

	})
}

function setStatsLibro() 
{
	var actualManId = manIdP;
    // Setup jQuery ajax mock:
    $.ajax({
        url: "../../assets/php/bpc.php",
		type: "POST",
		data: {"updateBookStats":"1", "bookId":actualManId}
		
    }).done(function(data)
    { //on Ajax success
		
		//alert("hola");
		//var hola;

	})
}

