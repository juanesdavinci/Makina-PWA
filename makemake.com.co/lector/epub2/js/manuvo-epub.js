"use strict";
//TeclaDummy
function teclaDummy(ctrl, alt, num){ 
	this.changeNum = function(ctrl, alt, num){ 
		this.keyCode = num; 
		this.ctrlKey = ctrl;
		this.altKey = alt;
		this.preventDefault = function(){
			return true;
		};
	}; 
	
            
	this.changeNum(ctrl, alt, num ); 
} 

//Fin TeclaDummy
var teclaMenos = new teclaDummy(true, false, 109);
var teclaMas = new teclaDummy(true, false, 107);
var teclaZero = new teclaDummy(true, false, 96);
            
document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		EPUBJS.filePath = "js/libs/";
		EPUBJS.cssPath = window.location.href.replace(window.location.hash, '').replace('index.html', '') + "css/";
		// fileStorage.filePath = EPUBJS.filePath;

		window.reader = ePubReader("/lector/books/bien/316_Una_carta_para_Luciana.epub");
                
	}
};

$('#smaller-font').on('click', function() 
{
	
	reader.adjustFontSize(teclaMenos);
  
});
$('#normal-font').on('click', function() 
{
	
	reader.adjustFontSize(teclaZero);
  
});

$('#bigger-font').on('click', function() 
{
	reader.adjustFontSize(teclaMas);
  
});

// 	   tipo de letra
$("form").click(function() {
	var text = $("#font").val();
	$("#viewer iframe").contents().find("html, body, div, p, span").css("font-family", text);
})


