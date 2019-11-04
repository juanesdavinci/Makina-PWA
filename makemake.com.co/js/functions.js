// JavaScript Document
function scrollToAnchor(aid){
	"use strict";
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

jQuery(document).ready(function($){

	"use strict";

	/* ---------------------------------------------------------------------- */
	/*	PreLoader
	/* ---------------------------------------------------------------------- */
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1);

	/* ---------------------------------------------------------------------- */
	/*	Search Script
	/* ---------------------------------------------------------------------- */
	$(".search-fld").on('click',function(){
		if($(this).hasClass('minus')){
			$(this).toggleClass("plus minus");
			$('.search-area').fadeOut();
		}else{
			$('.search-area').fadeIn();
			$(this).toggleClass("minus plus");
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Slider inside Tabs Script
	/* ---------------------------------------------------------------------- */
	$('a[href="#profile"]').one('shown.bs.tab', function (e) {
		$('.bxslider-1').bxSlider();
	});
	$('a[href="#messages"]').one('shown.bs.tab', function (e) {
		$('.bxslider-2').bxSlider();
	});
	$('a[href="#settings"]').one('shown.bs.tab', function (e) {
		$('.bxslider-3').bxSlider();
	});
	$('a[href="#settings2"]').one('shown.bs.tab', function (e) {
		$('.bxslider-4').bxSlider();
	});

	/* ---------------------------------------------------------------------- */
	/*	Back To TOp Script
	/* ---------------------------------------------------------------------- */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').css('opacity','1');
		} else {
			$('.back-to-top').css('opacity','0');
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Back to Top Script
	/* ---------------------------------------------------------------------- */
	$('.back-to-top a').on('click',function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});



	/* ---------------------------------------------------------------------- */
	/*	PrettyPhoto Script
	/* ---------------------------------------------------------------------- */
	if($("[rel^='prettyPhoto']").length){
		$("[rel^='prettyPhoto']").prettyPhoto();
	}

	/* ---------------------------------------------------------------------- */
	/*	Tooltip Script
	/* ---------------------------------------------------------------------- */
	if($("[data-toggle='tooltip']").length){
		$('[data-toggle="tooltip"]').tooltip();
	}

	/* ---------------------------------------------------------------------- */
	/*	Owl Slider Owl Demo Script
	/* ---------------------------------------------------------------------- */
	if($("#owl-demo").length){

		var owl = $("#owl-demo");

		owl.owlCarousel({
			itemsCustom : [
				[0, 2],
				[450, 2],
				[700, 3],
				[1000, 5],
				[1200, 5],
				[1360, 6],
			],
			dots:true,
			loop:true,
 			autoplay:true,
 			autoplayTimeout:2000,
 			autoplayHoverPause:true,
			navigation : true
			
		});

	}

	/* ---------------------------------------------------------------------- */
	/*	Owl BLog Script
	/* ---------------------------------------------------------------------- */
	if($(".owl-blog").length){

		var owl = $(".owl-blog");

		owl.owlCarousel({
			itemsCustom : [
				[0, 1],
				[450, 1],
				[700, 3],
				[1000, 4],
				[1200, 4],
				[1360, 5],
			],
			dots:true,
			loop:true,
 			autoplay:true,
 			autoplayTimeout:2000,
 			autoplayHoverPause:true,
			navigation : true
		});

	}

	/* ---------------------------------------------------------------------- */
	/*	Owl Slider Release Script
	/* ---------------------------------------------------------------------- */
	// este es el de home authors.. el que usaremos seguramente



	if($(".owl-release").length){

var owl = $(".owl-release");

owl.owlCarousel({
responsive:{
			0:{
					items:2,
					stagePadding: 40
			},
			480:{
					items:2,
					stagePadding: 80
			},
			600:{
					items:2,
					stagePadding: 100
			},
			1000:{
					items:3,
					stagePadding: 200
			},
			1200:{
					items:3,
					stagePadding: 250
			},
			1400:{
					items:4,
					stagePadding: 300
			},
			1600:{
					items:5,
					stagePadding: 350
			},
			1800:{
					items:5,
					stagePadding: 400
			},
			2200:{
					items:6,
					stagePadding: 400
			},
			4000:{
					items:8,
					stagePadding: 400
			}
			
	},

navigation : true,
		dots:true,
 			autoplay:true,
 			autoplayTimeout:2000,
 			autoplayHoverPause:true,
	 stagePadding: 200,
	 loop:true
});


}

if($(".collections-carousel").length){

var owl = $(".collections-carousel");

owl.owlCarousel({
responsive:{
			0:{
					items:1,
					stagePadding: 60
			},
			480:{
					items:1,
					stagePadding: 120
			},
			600:{
					items:1,
					stagePadding: 160
			},
			800:{
					items:2,
					stagePadding: 60
			},
			1000:{
					items:2,
					stagePadding: 250
			},
			1200:{
					items:3,
					stagePadding: 200
			},
			1400:{
					items:3,
					stagePadding: 350
			},
			1600:{
					items:4,
					stagePadding: 350
			},
			1700:{
					items:4,
					stagePadding: 300
			},
			1800:{
					items:4,
					stagePadding: 400
			},
			2200:{
					items:5,
					stagePadding: 400
			},
			4000:{
					items:5,
					stagePadding: 400
			}
			
	},

navigation : true,
		dots:true,
 		autoplay:true,
 		autoplayTimeout:2000,
 		autoplayHoverPause:true,
	 stagePadding: 200,
	 loop:true
});


}



if($(".owl-release-landing").length){

var owl = $(".owl-release-landing");

owl.owlCarousel({
responsive:{
		0:{
				items:1,
				stagePadding: 60
		},
		600:{
				items:2,
				stagePadding: 100
		},
		1000:{
				items:3,
				stagePadding: 0
		},
		1200:{
				items:4,
				stagePadding: 0
		},
		1400:{
				items:5,
				stagePadding: 0
		},
		1600:{
				items:6,
				stagePadding: 0
		},
		1800:{
				items:7,
				stagePadding: 0
		}
},

navigation : true,
dots:true,
 autoplay:true,
 autoplayTimeout:2000,
 autoplayHoverPause:true,
stagePadding: 200,
loop:true,
center:true
});


}



if($(".owl-landing").length){

var owl = $(".owl-landing");
var pixelRepon = 0;
owl.owlCarousel({
responsive:{
		0:{items:1, stagePadding: 12},
		320:{items:1, stagePadding: 12},
		324:{items:1, stagePadding: 14},
		328:{items:1, stagePadding: 16},
		332:{items:1, stagePadding: 18},
		336:{items:1, stagePadding: 20},
		340:{items:1, stagePadding: 22},
		344:{items:1, stagePadding: 24},
		348:{items:1, stagePadding: 26},
		352:{items:1, stagePadding: 28},
		356:{items:1, stagePadding: 30},
		360:{items:1, stagePadding: 32},
		364:{items:1, stagePadding: 34},
		368:{items:1, stagePadding: 36},
		372:{items:1, stagePadding: 38},
		376:{items:1, stagePadding: 40},
		380:{items:1, stagePadding: 42},
		384:{items:1, stagePadding: 44},
		388:{items:1, stagePadding: 46},
		392:{items:1, stagePadding: 48},
		396:{items:1, stagePadding: 50},
		400:{items:1, stagePadding: 52},
		404:{items:1, stagePadding: 54},
		408:{items:1, stagePadding: 56},
		412:{items:1, stagePadding: 58},
		416:{items:1, stagePadding: 60},
		420:{items:1, stagePadding: 62},
		424:{items:1, stagePadding: 64},
		428:{items:1, stagePadding: 66},
		432:{items:1, stagePadding: 68},
		436:{items:1, stagePadding: 70},
		440:{items:1, stagePadding: 72},
		444:{items:1, stagePadding: 74},
		448:{items:1, stagePadding: 76},
		452:{items:1, stagePadding: 78},
		456:{items:1, stagePadding: 80},
		460:{items:1, stagePadding: 82},
		464:{items:1, stagePadding: 84},
		468:{items:1, stagePadding: 86},
		472:{items:1, stagePadding: 88},
		476:{items:1, stagePadding: 90},
		480:{items:1, stagePadding: 92},
		484:{items:1, stagePadding: 94},
		488:{items:1, stagePadding: 96},
		492:{items:1, stagePadding: 98},
		496:{items:1, stagePadding: 100},
		500:{items:1, stagePadding: 102},
		504:{items:1, stagePadding: 104},
		508:{items:1, stagePadding: 106},
		512:{items:1, stagePadding: 108},
		516:{items:1, stagePadding: 110},
		520:{items:1, stagePadding: 112},
		524:{items:1, stagePadding: 114},
		528:{items:1, stagePadding: 116},
		532:{items:1, stagePadding: 118},
		536:{items:1, stagePadding: 120},
		540:{items:1, stagePadding: 122},
		544:{items:1, stagePadding: 124},
		548:{items:1, stagePadding: 126},
		552:{items:1, stagePadding: 128},
		556:{items:1, stagePadding: 130},
		560:{items:1, stagePadding: 132},
		564:{items:1, stagePadding: 134},
		568:{items:1, stagePadding: 136},
		572:{items:1, stagePadding: 138},
		576:{items:1, stagePadding: 140},
		580:{items:1, stagePadding: 142},
		584:{items:1, stagePadding: 144},
		588:{items:1, stagePadding: 146},
		592:{items:1, stagePadding: 148},
		596:{items:1, stagePadding: 150},
		600:{items:1, stagePadding: 152},
		604:{items:1, stagePadding: 154},
		608:{items:1, stagePadding: 156},
		612:{items:1, stagePadding: 158},
		616:{items:1, stagePadding: 160},
		620:{items:1, stagePadding: 162},
		624:{items:1, stagePadding: 164},
		628:{items:1, stagePadding: 166},
		632:{items:1, stagePadding: 168},
		636:{items:1, stagePadding: 170},
		640:{items:1, stagePadding: 0},
		644:{items:1, stagePadding: 2},
		648:{items:1, stagePadding: 4},
		652:{items:1, stagePadding: 6},
		656:{items:1, stagePadding: 8},
		660:{items:1, stagePadding: 10},
		664:{items:1, stagePadding: 12},
		668:{items:1, stagePadding: 14},
		672:{items:1, stagePadding: 16},
		676:{items:1, stagePadding: 18},
		680:{items:1, stagePadding: 20},
		684:{items:1, stagePadding: 22},
		688:{items:1, stagePadding: 24},
		692:{items:1, stagePadding: 26},
		696:{items:1, stagePadding: 28},
		700:{items:1, stagePadding: 30},
		704:{items:1, stagePadding: 32},
		708:{items:1, stagePadding: 34},
		712:{items:1, stagePadding: 36},
		716:{items:1, stagePadding: 38},
		720:{items:1, stagePadding: 40},
		724:{items:1, stagePadding: 42},
		728:{items:1, stagePadding: 44},
		732:{items:1, stagePadding: 46},
		736:{items:1, stagePadding: 48},
		740:{items:1, stagePadding: 50},
		744:{items:1, stagePadding: 52},
		748:{items:1, stagePadding: 54},
		752:{items:1, stagePadding: 56},
		756:{items:1, stagePadding: 58},
		760:{items:1, stagePadding: 60},
		764:{items:1, stagePadding: 62},
		768:{items:1, stagePadding: 64},
		772:{items:1, stagePadding: 66},
		776:{items:1, stagePadding: 68},
		780:{items:1, stagePadding: 70},
		784:{items:1, stagePadding: 72},
		788:{items:1, stagePadding: 74},
		792:{items:1, stagePadding: 76},
		796:{items:1, stagePadding: 78},
		800:{items:1, stagePadding: 80},
		804:{items:1, stagePadding: 82},
		808:{items:1, stagePadding: 84},
		812:{items:1, stagePadding: 86},
		816:{items:1, stagePadding: 88},
		820:{items:1, stagePadding: 90},
		824:{items:1, stagePadding: 92},
		828:{items:1, stagePadding: 94},
		832:{items:1, stagePadding: 96},
		836:{items:1, stagePadding: 98},
		840:{items:1, stagePadding: 100},
		844:{items:1, stagePadding: 102},
		848:{items:1, stagePadding: 104},
		852:{items:1, stagePadding: 106},
		856:{items:1, stagePadding: 108},
		860:{items:1, stagePadding: 110},
		864:{items:1, stagePadding: 112},
		868:{items:1, stagePadding: 114},
		872:{items:1, stagePadding: 116},
		876:{items:1, stagePadding: 118},
		880:{items:1, stagePadding: 120},
		884:{items:1, stagePadding: 122},
		888:{items:1, stagePadding: 124},
		892:{items:1, stagePadding: 126},
		896:{items:1, stagePadding: 128},
		900:{items:1, stagePadding: 130},
		904:{items:1, stagePadding: 132},
		908:{items:1, stagePadding: 134},
		912:{items:1, stagePadding: 136},
		916:{items:1, stagePadding: 138},
		920:{items:1, stagePadding: 140},
		924:{items:1, stagePadding: 142},
		928:{items:1, stagePadding: 144},
		932:{items:1, stagePadding: 146},
		936:{items:1, stagePadding: 148},
		940:{items:1, stagePadding: 150},
		944:{items:1, stagePadding: 152},
		948:{items:1, stagePadding: 154},
		952:{items:1, stagePadding: 156},
		956:{items:1, stagePadding: 158},
		960:{items:1, stagePadding: 160},
		964:{items:1, stagePadding: 162},
		968:{items:1, stagePadding: 164},
		972:{items:1, stagePadding: 166},
		976:{items:1, stagePadding: 168},
		980:{items:1, stagePadding: 170},
		984:{items:1, stagePadding: 172},
		988:{items:1, stagePadding: 174},
		992:{items:1, stagePadding: 176},
		996:{items:1, stagePadding: 178},
		1000:{items:1, stagePadding: 180},
		1004:{items:1, stagePadding: 182},
		1008:{items:1, stagePadding: 184},
		1012:{items:1, stagePadding: 186},
		1016:{items:1, stagePadding: 188},
		1020:{items:1, stagePadding: 190},
		1024:{items:1, stagePadding: 192},
		1028:{items:1, stagePadding: 194},
		1032:{items:1, stagePadding: 196},
		1036:{items:1, stagePadding: 198},
		1040:{items:1, stagePadding: 200},
		1044:{items:1, stagePadding: 202},
		1048:{items:1, stagePadding: 204},
		1052:{items:1, stagePadding: 206},
		1056:{items:1, stagePadding: 208},
		1060:{items:1, stagePadding: 210},
		1064:{items:1, stagePadding: 212},
		1068:{items:1, stagePadding: 214},
		1072:{items:1, stagePadding: 216},
		1076:{items:1, stagePadding: 218},
		1080:{items:1, stagePadding: 220},
		1084:{items:1, stagePadding: 222},
		1088:{items:1, stagePadding: 224},
		1092:{items:1, stagePadding: 226},
		1096:{items:1, stagePadding: 228},
		1100:{items:1, stagePadding: 230},
		1104:{items:1, stagePadding: 232},
		1108:{items:1, stagePadding: 234},
		1112:{items:1, stagePadding: 236},
		1116:{items:1, stagePadding: 238},
		1120:{items:1, stagePadding: 240},
		1124:{items:1, stagePadding: 242},
		1128:{items:1, stagePadding: 244},
		1132:{items:1, stagePadding: 246},
		1136:{items:1, stagePadding: 248},
		1140:{items:1, stagePadding: 250},
		1144:{items:1, stagePadding: 252},
		1148:{items:1, stagePadding: 254},
		1152:{items:1, stagePadding: 256},
		1156:{items:1, stagePadding: 258},
		1160:{items:1, stagePadding: 260},
		1164:{items:1, stagePadding: 262},
		1168:{items:1, stagePadding: 264},
		1172:{items:1, stagePadding: 266},
		1176:{items:1, stagePadding: 268},
		1180:{items:1, stagePadding: 270},
		1184:{items:1, stagePadding: 272},
		1188:{items:1, stagePadding: 274},
		1192:{items:1, stagePadding: 276},
		1196:{items:1, stagePadding: 278},
		1200:{items:1, stagePadding: 280},
		1204:{items:1, stagePadding: 282},
		1208:{items:1, stagePadding: 284},
		1212:{items:1, stagePadding: 286},
		1216:{items:1, stagePadding: 288},
		1220:{items:1, stagePadding: 290},
		1224:{items:1, stagePadding: 292},
		1228:{items:1, stagePadding: 294},
		1232:{items:1, stagePadding: 296},
		1236:{items:1, stagePadding: 298},
		1240:{items:1, stagePadding: 300},
		1244:{items:1, stagePadding: 302},
		1248:{items:1, stagePadding: 304},
		1252:{items:1, stagePadding: 306},
		1256:{items:1, stagePadding: 308},
		1260:{items:1, stagePadding: 310},
		1264:{items:1, stagePadding: 312},
		1268:{items:1, stagePadding: 314},
		1272:{items:1, stagePadding: 316},
		1276:{items:1, stagePadding: 318},
		1280:{items:1, stagePadding: 320},
		1284:{items:1, stagePadding: 322},
		1288:{items:1, stagePadding: 324},
		1292:{items:1, stagePadding: 326},
		1296:{items:1, stagePadding: 328},
		1300:{items:1, stagePadding: 330},
		1304:{items:1, stagePadding: 332},
		1308:{items:1, stagePadding: 334},
		1312:{items:1, stagePadding: 336},
		1316:{items:1, stagePadding: 338},
		1320:{items:1, stagePadding: 340},
		1324:{items:1, stagePadding: 342},
		1328:{items:1, stagePadding: 344},
		1332:{items:1, stagePadding: 346},
		1336:{items:1, stagePadding: 348},
		1340:{items:1, stagePadding: 350},
		1344:{items:1, stagePadding: 352},
		1348:{items:1, stagePadding: 354},
		1352:{items:1, stagePadding: 356},
		1356:{items:1, stagePadding: 358},
		1360:{items:1, stagePadding: 360},
		1364:{items:1, stagePadding: 362},
		1368:{items:1, stagePadding: 364},
		1372:{items:1, stagePadding: 366},
		1376:{items:1, stagePadding: 368},
		1380:{items:1, stagePadding: 370},
		1384:{items:1, stagePadding: 372},
		1388:{items:1, stagePadding: 374},
		1392:{items:1, stagePadding: 376},
		1396:{items:1, stagePadding: 378},
		1400:{items:1, stagePadding: 380},
		1404:{items:1, stagePadding: 382},
		1408:{items:1, stagePadding: 384},
		1412:{items:1, stagePadding: 386},
		1416:{items:1, stagePadding: 388},
		1420:{items:1, stagePadding: 390},
		1424:{items:1, stagePadding: 392},
		1428:{items:1, stagePadding: 394},
		1432:{items:1, stagePadding: 396},
		1436:{items:1, stagePadding: 398},
		1440:{items:1, stagePadding: 400},
		1444:{items:1, stagePadding: 402},
		1448:{items:1, stagePadding: 404},
		1452:{items:1, stagePadding: 406},
		1456:{items:1, stagePadding: 408},
		1460:{items:1, stagePadding: 410},
		1464:{items:1, stagePadding: 412},
		1468:{items:1, stagePadding: 414},
		1472:{items:1, stagePadding: 416},
		1476:{items:1, stagePadding: 418},
		1480:{items:1, stagePadding: 420},
		1484:{items:1, stagePadding: 422},
		1488:{items:1, stagePadding: 424},
		1492:{items:1, stagePadding: 426},
		1496:{items:1, stagePadding: 428},
		1500:{items:1, stagePadding: 430},
		1504:{items:1, stagePadding: 432},
		1508:{items:1, stagePadding: 434},
		1512:{items:1, stagePadding: 436},
		1516:{items:1, stagePadding: 438},
		1520:{items:1, stagePadding: 440},
		1524:{items:1, stagePadding: 442},
		1528:{items:1, stagePadding: 444},
		1532:{items:1, stagePadding: 446},
		1536:{items:1, stagePadding: 448},
		1540:{items:1, stagePadding: 450},
		1544:{items:1, stagePadding: 452},
		1548:{items:1, stagePadding: 454},
		1552:{items:1, stagePadding: 456},
		1556:{items:1, stagePadding: 458},
		1560:{items:1, stagePadding: 460},
		1564:{items:1, stagePadding: 462},
		1568:{items:1, stagePadding: 464},
		1572:{items:1, stagePadding: 466},
		1576:{items:1, stagePadding: 468},
		1580:{items:1, stagePadding: 470},
		1584:{items:1, stagePadding: 472},
		1588:{items:1, stagePadding: 474},
		1592:{items:1, stagePadding: 476},
		1596:{items:1, stagePadding: 478},
		1600:{items:1, stagePadding: 480},
		1604:{items:1, stagePadding: 482},
		1608:{items:1, stagePadding: 484},
		1612:{items:1, stagePadding: 486},
		1616:{items:1, stagePadding: 488},
		1620:{items:1, stagePadding: 490},
		1624:{items:1, stagePadding: 492},
		1628:{items:1, stagePadding: 494},
		1632:{items:1, stagePadding: 496},
		1636:{items:1, stagePadding: 498},
		1640:{items:1, stagePadding: 500},
		1644:{items:1, stagePadding: 502},
		1648:{items:1, stagePadding: 504},
		1652:{items:1, stagePadding: 506},
		1656:{items:1, stagePadding: 508},
		1660:{items:1, stagePadding: 510},
		1664:{items:1, stagePadding: 512},
		1668:{items:1, stagePadding: 514},
		1672:{items:1, stagePadding: 516},
		1676:{items:1, stagePadding: 518},
		1680:{items:1, stagePadding: 520},
		1684:{items:1, stagePadding: 522},
		1688:{items:1, stagePadding: 524},
		1692:{items:1, stagePadding: 526},
		1696:{items:1, stagePadding: 528},
		1700:{items:1, stagePadding: 530},
		1704:{items:1, stagePadding: 532},
		1708:{items:1, stagePadding: 534},
		1712:{items:1, stagePadding: 536},
		1716:{items:1, stagePadding: 538},
		1720:{items:1, stagePadding: 540},
		1724:{items:1, stagePadding: 542},
		1728:{items:1, stagePadding: 544},
		1732:{items:1, stagePadding: 546},
		1736:{items:1, stagePadding: 548},
		1740:{items:1, stagePadding: 550},
		1744:{items:1, stagePadding: 552},
		1748:{items:1, stagePadding: 554},
		1752:{items:1, stagePadding: 556},
		1756:{items:1, stagePadding: 558},
		1760:{items:1, stagePadding: 560},
		1764:{items:1, stagePadding: 562},
		1768:{items:1, stagePadding: 564},
		1772:{items:1, stagePadding: 566},
		1776:{items:1, stagePadding: 568},
		1780:{items:1, stagePadding: 570},
		1784:{items:1, stagePadding: 572},
		1788:{items:1, stagePadding: 574},
		1792:{items:1, stagePadding: 576},
		1796:{items:1, stagePadding: 578},
		1800:{items:1, stagePadding: 580},
		1804:{items:1, stagePadding: 582},
		1808:{items:1, stagePadding: 584},
		1812:{items:1, stagePadding: 586},
		1816:{items:1, stagePadding: 588},
		1820:{items:1, stagePadding: 590},
		1824:{items:1, stagePadding: 592},
		1828:{items:1, stagePadding: 594},
		1832:{items:1, stagePadding: 596},
		1836:{items:1, stagePadding: 598},
		1840:{items:1, stagePadding: 600},
		1844:{items:1, stagePadding: 602},
		1848:{items:1, stagePadding: 604},
		1852:{items:1, stagePadding: 606},
		1856:{items:1, stagePadding: 608},
		1860:{items:1, stagePadding: 610},
		1864:{items:1, stagePadding: 612},
		1868:{items:1, stagePadding: 614},
		1872:{items:1, stagePadding: 616},
		1876:{items:1, stagePadding: 618},
		1880:{items:1, stagePadding: 620},
		1884:{items:1, stagePadding: 622},
		1888:{items:1, stagePadding: 624},
		1892:{items:1, stagePadding: 626},
		1896:{items:1, stagePadding: 628},
		1900:{items:1, stagePadding: 630},
		1904:{items:1, stagePadding: 632},
		1908:{items:1, stagePadding: 634},
		1912:{items:1, stagePadding: 636},
		1916:{items:1, stagePadding: 638},
		1920:{items:1, stagePadding: 640},
		1924:{items:1, stagePadding: 642},
		1928:{items:1, stagePadding: 644},
		1932:{items:1, stagePadding: 646},
		1936:{items:1, stagePadding: 648},
		1940:{items:1, stagePadding: 650},
		1944:{items:1, stagePadding: 652},
		1948:{items:1, stagePadding: 654},
		1952:{items:1, stagePadding: 656},
		1956:{items:1, stagePadding: 658},
		1960:{items:1, stagePadding: 660},
		1964:{items:1, stagePadding: 662},
		1968:{items:1, stagePadding: 664},
		1972:{items:1, stagePadding: 666},
		1976:{items:1, stagePadding: 668},
		1980:{items:1, stagePadding: 670},
		1984:{items:1, stagePadding: 672},
		1988:{items:1, stagePadding: 674},
		1992:{items:1, stagePadding: 676},
		1996:{items:1, stagePadding: 678},
		2000:{items:1, stagePadding: 680},
		2004:{items:1, stagePadding: 682},
		2008:{items:1, stagePadding: 684},
		2012:{items:1, stagePadding: 686},
		2016:{items:1, stagePadding: 688},
		2020:{items:1, stagePadding: 690},
		2024:{items:1, stagePadding: 692},
		2028:{items:1, stagePadding: 694},
		2032:{items:1, stagePadding: 696},
		2036:{items:1, stagePadding: 698},
		2040:{items:1, stagePadding: 700},
		2044:{items:1, stagePadding: 702},
		2048:{items:1, stagePadding: 704},
		2052:{items:1, stagePadding: 706},
		2056:{items:1, stagePadding: 708},
		2060:{items:1, stagePadding: 710},
		2064:{items:1, stagePadding: 712},
		2068:{items:1, stagePadding: 714},
		2072:{items:1, stagePadding: 716},
		2076:{items:1, stagePadding: 718},
		2080:{items:1, stagePadding: 720},
		2084:{items:1, stagePadding: 722},
		2088:{items:1, stagePadding: 724},
		2092:{items:1, stagePadding: 726},
		2096:{items:1, stagePadding: 728},
		2100:{items:1, stagePadding: 730},
		2104:{items:1, stagePadding: 732},
		2108:{items:1, stagePadding: 734},
		2112:{items:1, stagePadding: 736},
		2116:{items:1, stagePadding: 738},
		2120:{items:1, stagePadding: 740},
		2124:{items:1, stagePadding: 742},
		2128:{items:1, stagePadding: 744},
		2132:{items:1, stagePadding: 746},
		2136:{items:1, stagePadding: 748},
		2140:{items:1, stagePadding: 750},
		2144:{items:1, stagePadding: 752},
		2148:{items:1, stagePadding: 754},
		2152:{items:1, stagePadding: 756},
		2156:{items:1, stagePadding: 758},
		2160:{items:1, stagePadding: 760},
		2164:{items:1, stagePadding: 762},
		2168:{items:1, stagePadding: 764},
		2172:{items:1, stagePadding: 766},
		2176:{items:1, stagePadding: 768},
		2180:{items:1, stagePadding: 770},
		2184:{items:1, stagePadding: 772},
		2188:{items:1, stagePadding: 774},
		2192:{items:1, stagePadding: 776},
		2196:{items:1, stagePadding: 778},
		2200:{items:1, stagePadding: 780},
		2204:{items:1, stagePadding: 782},
		2208:{items:1, stagePadding: 784},
		2212:{items:1, stagePadding: 786},
		2216:{items:1, stagePadding: 788},
		2220:{items:1, stagePadding: 790},
		2224:{items:1, stagePadding: 792},
		2228:{items:1, stagePadding: 794},
		2232:{items:1, stagePadding: 796},
		2236:{items:1, stagePadding: 798},
		2240:{items:1, stagePadding: 800},
		2244:{items:1, stagePadding: 802},
		2248:{items:1, stagePadding: 804},
		2252:{items:1, stagePadding: 806},
		2256:{items:1, stagePadding: 808},
		2260:{items:1, stagePadding: 810},
		2264:{items:1, stagePadding: 812},
		2268:{items:1, stagePadding: 814},
		2272:{items:1, stagePadding: 816},
		2276:{items:1, stagePadding: 818},
		2280:{items:1, stagePadding: 820},
		2284:{items:1, stagePadding: 822},
		2288:{items:1, stagePadding: 824},
		2292:{items:1, stagePadding: 826},
		2296:{items:1, stagePadding: 828},
		2300:{items:1, stagePadding: 830},
		2304:{items:1, stagePadding: 832},
		2308:{items:1, stagePadding: 834},
		2312:{items:1, stagePadding: 836},
		2316:{items:1, stagePadding: 838},
		2320:{items:1, stagePadding: 840},
		2324:{items:1, stagePadding: 842},
		2328:{items:1, stagePadding: 844},
		2332:{items:1, stagePadding: 846},
		2336:{items:1, stagePadding: 848},
		2340:{items:1, stagePadding: 850},
		2344:{items:1, stagePadding: 852},
		2348:{items:1, stagePadding: 854},
		2352:{items:1, stagePadding: 856},
		2356:{items:1, stagePadding: 858},
		2360:{items:1, stagePadding: 860},
		2364:{items:1, stagePadding: 862},
		2368:{items:1, stagePadding: 864},
		2372:{items:1, stagePadding: 866},
		2376:{items:1, stagePadding: 868},
		2380:{items:1, stagePadding: 870},
		2384:{items:1, stagePadding: 872},
		2388:{items:1, stagePadding: 874},
		2392:{items:1, stagePadding: 876},
		2396:{items:1, stagePadding: 878},
		2400:{items:1, stagePadding: 880},
		2404:{items:1, stagePadding: 882},
		2408:{items:1, stagePadding: 884},
		2412:{items:1, stagePadding: 886},
		2416:{items:1, stagePadding: 888},
		2420:{items:1, stagePadding: 890},
		2424:{items:1, stagePadding: 892},
		2428:{items:1, stagePadding: 894},
		2432:{items:1, stagePadding: 896},
		2436:{items:1, stagePadding: 898},
		2440:{items:1, stagePadding: 900},
		2444:{items:1, stagePadding: 902},
		2448:{items:1, stagePadding: 904},
		2452:{items:1, stagePadding: 906},
		2456:{items:1, stagePadding: 908},
		2460:{items:1, stagePadding: 910},
		2464:{items:1, stagePadding: 912},
		2468:{items:1, stagePadding: 914},
		2472:{items:1, stagePadding: 916},
		2476:{items:1, stagePadding: 918},
		2480:{items:1, stagePadding: 920},
		2484:{items:1, stagePadding: 922},
		2488:{items:1, stagePadding: 924},
		2492:{items:1, stagePadding: 926},
		2496:{items:1, stagePadding: 928},
		2500:{items:1, stagePadding: 930},
		2504:{items:1, stagePadding: 932},
		2508:{items:1, stagePadding: 934},
		2512:{items:1, stagePadding: 936},
		2516:{items:1, stagePadding: 938},
		2520:{items:1, stagePadding: 940},
		2524:{items:1, stagePadding: 942},
		2528:{items:1, stagePadding: 944},
		2532:{items:1, stagePadding: 946},
		2536:{items:1, stagePadding: 948},
		2540:{items:1, stagePadding: 950},
		2544:{items:1, stagePadding: 952},
		2548:{items:1, stagePadding: 954},
		2552:{items:1, stagePadding: 956},
		2556:{items:1, stagePadding: 958},
		2560:{items:1, stagePadding: 960},
		2564:{items:1, stagePadding: 962},
		2568:{items:1, stagePadding: 964},
		2572:{items:1, stagePadding: 966},
		2576:{items:1, stagePadding: 968},
		2580:{items:1, stagePadding: 970},
		2584:{items:1, stagePadding: 972},
		2588:{items:1, stagePadding: 974},
		2592:{items:1, stagePadding: 976},
		2596:{items:1, stagePadding: 978},
		2600:{items:1, stagePadding: 980},
		2604:{items:1, stagePadding: 982},
		2608:{items:1, stagePadding: 984},
		2612:{items:1, stagePadding: 986},
		2616:{items:1, stagePadding: 988},
		2620:{items:1, stagePadding: 990},
		2624:{items:1, stagePadding: 992},
		2628:{items:1, stagePadding: 994},
		2632:{items:1, stagePadding: 996},
		2636:{items:1, stagePadding: 998},
		2640:{items:1, stagePadding: 1000},
		2644:{items:1, stagePadding: 1002},
		2648:{items:1, stagePadding: 1004},
		2652:{items:1, stagePadding: 1006},
		2656:{items:1, stagePadding: 1008},
		2660:{items:1, stagePadding: 1010},
		2664:{items:1, stagePadding: 1012},
		2668:{items:1, stagePadding: 1014},
		2672:{items:1, stagePadding: 1016},
		2676:{items:1, stagePadding: 1018},
		2680:{items:1, stagePadding: 1020},
		2684:{items:1, stagePadding: 1022},
		2688:{items:1, stagePadding: 1024},
		2692:{items:1, stagePadding: 1026},
		2696:{items:1, stagePadding: 1028},
		2700:{items:1, stagePadding: 1030},
		2704:{items:1, stagePadding: 1032},
		2708:{items:1, stagePadding: 1034},
		2712:{items:1, stagePadding: 1036},
		2716:{items:1, stagePadding: 1038},
		2720:{items:1, stagePadding: 1040},
		2724:{items:1, stagePadding: 1042},
		2728:{items:1, stagePadding: 1044},
		2732:{items:1, stagePadding: 1046},
		2736:{items:1, stagePadding: 1048},
		2740:{items:1, stagePadding: 1050},
		2744:{items:1, stagePadding: 1052},
		2748:{items:1, stagePadding: 1054},
		2752:{items:1, stagePadding: 1056},
		2756:{items:1, stagePadding: 1058},
		2760:{items:1, stagePadding: 1060},
		2764:{items:1, stagePadding: 1062},
		2768:{items:1, stagePadding: 1064},
		2772:{items:1, stagePadding: 1066},
		2776:{items:1, stagePadding: 1068},
		2780:{items:1, stagePadding: 1070},
		2784:{items:1, stagePadding: 1072},
		2788:{items:1, stagePadding: 1074},
		2792:{items:1, stagePadding: 1076},
		2796:{items:1, stagePadding: 1078},
		2800:{items:1, stagePadding: 1080},
		2804:{items:1, stagePadding: 1082},
		2808:{items:1, stagePadding: 1084},
		2812:{items:1, stagePadding: 1086},
		2816:{items:1, stagePadding: 1088},
		2820:{items:1, stagePadding: 1090},
		2824:{items:1, stagePadding: 1092},
		2828:{items:1, stagePadding: 1094},
		2832:{items:1, stagePadding: 1096},
		2836:{items:1, stagePadding: 1098},
		2840:{items:1, stagePadding: 1100},
		2844:{items:1, stagePadding: 1102},
		2848:{items:1, stagePadding: 1104},
		2852:{items:1, stagePadding: 1106},
		2856:{items:1, stagePadding: 1108},
		2860:{items:1, stagePadding: 1110},
		2864:{items:1, stagePadding: 1112},
		2868:{items:1, stagePadding: 1114},
		2872:{items:1, stagePadding: 1116},
		2876:{items:1, stagePadding: 1118},
		2880:{items:1, stagePadding: 1120},
		2884:{items:1, stagePadding: 1122},
		2888:{items:1, stagePadding: 1124},
		2892:{items:1, stagePadding: 1126},
		2896:{items:1, stagePadding: 1128},
		2900:{items:1, stagePadding: 1130},
		2904:{items:1, stagePadding: 1132},
		2908:{items:1, stagePadding: 1134},
		2912:{items:1, stagePadding: 1136},
		2916:{items:1, stagePadding: 1138},
		2920:{items:1, stagePadding: 1140},
		2924:{items:1, stagePadding: 1142},
		2928:{items:1, stagePadding: 1144},
		2932:{items:1, stagePadding: 1146},
		2936:{items:1, stagePadding: 1148},
		2940:{items:1, stagePadding: 1150},
		2944:{items:1, stagePadding: 1152},
		2948:{items:1, stagePadding: 1154},
		2952:{items:1, stagePadding: 1156},
		2956:{items:1, stagePadding: 1158},
		2960:{items:1, stagePadding: 1160},
		2964:{items:1, stagePadding: 1162},
		2968:{items:1, stagePadding: 1164},
		2972:{items:1, stagePadding: 1166},
		2976:{items:1, stagePadding: 1168},
		2980:{items:1, stagePadding: 1170},
		2984:{items:1, stagePadding: 1172},
		2988:{items:1, stagePadding: 1174},
		2992:{items:1, stagePadding: 1176},
		2996:{items:1, stagePadding: 1178},
		3000:{items:1, stagePadding: 1180}
},

navigation : true,
	dots:true,
 // stagePadding: 200,
 loop:true,
 autoplay:true,
 autoplayTimeout:3500,
 autoplayHoverPause:true
});


}




	// 	$(function() {
	//   $('.owl-landing').owlCarousel({
	//     margin: 10,
	//     loop: true,
	//     items: 1,
	//     stagePadding: 50
	//   });
	// });

	var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
			menuRight = document.getElementById( 'cbp-spmenu-s2' ),
			menuTop = document.getElementById( 'cbp-spmenu-s3' ),
			menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
			showLeft = document.getElementById( 'showLeft' ),
			showRight = document.getElementById( 'showRight' ),
			showTop = document.getElementById( 'showTop' ),
			showBottom = document.getElementById( 'showBottom' ),
			showLeftPush = document.getElementById( 'showLeftPush' ),
			showRightPush = document.getElementById( 'showRightPush' ),
			body = document.body;

	showLeft.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuLeft, 'cbp-spmenu-open' );
		disableOther( 'showLeft' );
	};/*
	showRight.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuRight, 'cbp-spmenu-open' );
		disableOther( 'showRight' );
	};
	showTop.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuTop, 'cbp-spmenu-open' );
		disableOther( 'showTop' );
	};
	showBottom.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuBottom, 'cbp-spmenu-open' );
		disableOther( 'showBottom' );
	};
	showLeftPush.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( body, 'cbp-spmenu-push-toright' );
		classie.toggle( menuLeft, 'cbp-spmenu-open' );
		disableOther( 'showLeftPush' );
	};
	showRightPush.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( body, 'cbp-spmenu-push-toleft' );
		classie.toggle( menuRight, 'cbp-spmenu-open' );
		disableOther( 'showRightPush' );
	};

	function disableOther( button ) {
		if( button !== 'showLeft' ) {
			classie.toggle( showLeft, 'disabled' );
		}
		if( button !== 'showRight' ) {
			classie.toggle( showRight, 'disabled' );
		}
		if( button !== 'showTop' ) {
			classie.toggle( showTop, 'disabled' );
		}
		if( button !== 'showBottom' ) {
			classie.toggle( showBottom, 'disabled' );
		}
		if( button !== 'showLeftPush' ) {
			classie.toggle( showLeftPush, 'disabled' );
		}
		if( button !== 'showRightPush' ) {
			classie.toggle( showRightPush, 'disabled' );
		}
	} */


	$(".close-button").click(function (e)
	{

		$(".dl-menu").removeClass("cbp-spmenu-open");
	});



		/* ---------------------------------------------------------------------- */
	/*	Owl Slider Release Script
	/* ---------------------------------------------------------------------- */
	// este es el de home authors.. el que usaremos seguramente
	if($(".owl-release2").length){

		var owl = $(".owl-release2");

		owl.owlCarousel({
			itemsCustom : [
				[0, 1],
				[450, 2],
				[700, 2],
				[1000, 4],
				[1200, 4],
				[1360, 3],
			],
			navigation : true,
			loop:true,
 			autoplay:true,
 			autoplayTimeout:2000,
 			autoplayHoverPause:true,
			dots:true
		});


	}

		/* ---------------------------------------------------------------------- */
	/*	Owl Slider Release Script
	/* ---------------------------------------------------------------------- */
	// este es el de home authors.. el que usaremos seguramente
	/*if($(".collections-carousel").length){

		var owl = $(".collections-carousel");

		owl.owlCarousel({
			itemsCustom : [
				[0, 1],
				[450, 2],
				[700, 2],
				[1000, 4],
				[1200, 4],
				[1360, 3],
			],
			navigation : true,
		});


	}*/

	/* ---------------------------------------------------------------------- */
	/*	Owl Slider Library Script
	/* ---------------------------------------------------------------------- */
	if($(".owl-library").length){

		var owl = $(".owl-library");

		owl.owlCarousel({
			itemsCustom : [
				[0, 1],
				[450, 1],
				[700, 3],
				[1000, 4],
				[1200, 4],
				[1360, 3],
			],
			dots:true,
			loop:true,
 			autoplay:true,
 			autoplayTimeout:2000,
 			autoplayHoverPause:true,
			navigation : true
			
		});

	}


	/* ---------------------------------------------------------------------- */
	/*	Testimonial Slider Script
	/* ---------------------------------------------------------------------- */
	if($(".owl-testimonials").length){

		var owl = $(".owl-testimonials");

		owl.owlCarousel({
			itemsCustom : [
				[0, 1],
				[450, 1],
				[700, 1],
				[1000, 2],
				[1200, 2],
				[1360, 2],
			],
			dots:true,
			loop:true,
 			autoplay:true,
 			autoplayTimeout:2000,
 			autoplayHoverPause:true,
			navigation : true
		});
	}


	/* ---------------------------------------------------------------------- */
	/*	Accordion Script
	/* ---------------------------------------------------------------------- */
	if($("#ex2").length){
		$("#ex2").slider({});
	}

	/* ---------------------------------------------------------------------- */
	/*	Accordion Script
	/* ---------------------------------------------------------------------- */
	if($('.accordion').length){
		//custom animation for open/close
		$.fn.slideFadeToggle = function(speed, easing, callback) {
		  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
		};

		$('.accordion').accordion({
		  defaultOpen: '#section2',
		  cookieName: 'nav',
		  speed: 'slow',
		  animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
			elem.next().stop(true, true).slideFadeToggle(opts.speed);
		  },
		  animateClose: function (elem, opts) { //replace the standard slideDown with custom function
			elem.next().stop(true, true).slideFadeToggle(opts.speed);
		  }
		});
	}

	/* ---------------------------------------------------------------------- */
	/*	Select Menu Script
	/* ---------------------------------------------------------------------- */
	if($(".select-menu").length){
			$(".select-menu").selectbox();{
		}
	}


	/* ---------------------------------------------------------------------- */
	/*	Range Script
	/* ---------------------------------------------------------------------- */
	if($(".range").length){
		$(".range").slider();
		$(".range").on("slide", function(slideEvt) {
			$(".range-slider").text(slideEvt.value);
		});
	}

	/* ---------------------------------------------------------------------- */
	/*	Range Script
	/* ---------------------------------------------------------------------- */
	if($(".range2").length){
		$(".range2").slider();
		$(".range2").on("slide", function(slideEvt) {
			$(".range-slider2").text(slideEvt.value);
		});
	}

	/* ---------------------------------------------------------------------- */
	/*	BxSlider Script
	/* ---------------------------------------------------------------------- */
	if($(".bxslider").length){
		$('.bxslider').bxSlider();
	}

	/* ---------------------------------------------------------------------- */
	/*	BxSlider2 Script
	/* ---------------------------------------------------------------------- */
	if($(".bxslider2").length){
		$('.bxslider2').bxSlider({
		  mode: 'fade',
		  auto: true,
		  autoControls: true,
		  pause: 2000
		});
	}

	/* ---------------------------------------------------------------------- */
	/*	BxSlider-thumbs Script
	/* ---------------------------------------------------------------------- */
	if($(".bxslider-thums").length){
		$('.bxslider-thums').bxSlider({
		  pagerCustom: '#bx-pager'
		});
	}

	/* ---------------------------------------------------------------------- */
	/*	Counter Script
	/* ---------------------------------------------------------------------- */
	if($(".counter").length){
		$('.counter').counterUp({
			delay: 10,
			time: 1000

		});
	}

	/* ---------------------------------------------------------------------- */
	/*	Default CountDown Script
	/* ---------------------------------------------------------------------- */
	if($("#defaultCountdown").length){
		$(function () {
			var austDay = new Date();
			austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
			$('#defaultCountdown').countdown({until: austDay});
			$('#year').text(austDay.getFullYear());
		});
	}

	/* ---------------------------------------------------------------------- */
	/*	Google Map Script
	/* ---------------------------------------------------------------------- */
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	  });
	}

	/* ---------------------------------------------------------------------- */
	/*	Tabs Script
	/* ---------------------------------------------------------------------- */
	if($("#tabs").length){
		$('#tabs').tab();
	}

	/* ---------------------------------------------------------------------- */
	/*	DL Responsive Menu
	/* ---------------------------------------------------------------------- */
	if(typeof($.fn.dlmenu) == 'function'){
		$('#kode-responsive-navigation').each(function(){
			$(this).find('.dl-submenu').each(function(){
				if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
					var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
					parent_nav.append($(this).siblings('a').clone());

					$(this).prepend(parent_nav);
				}
			});
			$(this).dlmenu();
		});
	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	if($('#contactform').length) {

		var $form = $('#contactform'),
		$loader = '<img src="images/ajax_loading.gif" alt="Loading..." />';
		$form.append('<div class="hidden-me" id="contact_form_responce">');

		var $response = $('#contact_form_responce');
		$response.append('<p></p>');

		$form.submit(function(e){

			$response.find('p').html($loader);

			var data = {
				action: "contact_form_request",
				values: $("#contactform").serialize()
			};

			//send data to server
			$.post("inc/contact-send.php", data, function(response) {

				response = $.parseJSON(response);

				$(".incorrect-data").removeClass("incorrect-data");
				$response.find('img').remove();

				if(response.is_errors){

					$response.find('p').removeClass().addClass("error type-2");
					$.each(response.info,function(input_name, input_label) {

						$("[name="+input_name+"]").addClass("incorrect-data");
						$response.find('p').append('Please enter correct "'+input_label+'"!'+ '</br>');
					});

				} else {

					$response.find('p').removeClass().addClass('success type-2');

					if(response.info == 'success'){

						$response.find('p').append('Your email has been sent!');
						$form.find('input:not(input[type="submit"], button), textarea, select').val('').attr( 'checked', false );
						$response.delay(1500).hide(400);
					}

					if(response.info == 'server_fail'){
						$response.find('p').append('Server failed. Send later!');
					}
				}

				// Scroll to bottom of the form to show respond message
				var bottomPosition = $form.offset().top + $form.outerHeight() - $(window).height();

				if($(document).scrollTop() < bottomPosition) {
					$('html, body').animate({
						scrollTop : bottomPosition
					});
				}

				if(!$('#contact_form_responce').css('display') == 'block') {
					$response.show(450);
				}

			});

			e.preventDefault();

		});

	}

	/* ---------------------------------------------------------------------- */
	/*	Google Map Script
	/* ---------------------------------------------------------------------- */
	if($('#map-canvas').length){
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	/* ---------------------------------------------------------------------- */
	/*	Filterable Script
	/* ---------------------------------------------------------------------- */
	if($("#filterable-item-holder-1").length){
		jQuery(window).load(function($) {
			var filter_container = jQuery('#filterable-item-holder-1');

			filter_container.children().css('position','relative');
			filter_container.masonry({
				singleMode: true,
				itemSelector: '.filterable-item:not(.hide)',
				animate: true,
				animationOptions:{ duration: 800, queue: false }
			});
			jQuery(window).resize(function(){
				var temp_width =  filter_container.children().filter(':first').width()+30;
				filter_container.masonry({
					columnWidth: temp_width,
					singleMode: true,
					itemSelector: '.filterable-item:not(.hide)',
					animate: true,
					animationOptions:{ duration: 800, queue: false }
				});
			});
			jQuery('ul#filterable-item-filter-1 a').on('click',function(e){

				jQuery(this).addClass("active");
				jQuery(this).parents("li").siblings().children("a").removeClass("active");
				e.preventDefault();

				var select_filter = jQuery(this).attr('data-value');

				if( select_filter == "All" || jQuery(this).parent().index() == 0 ){
					filter_container.children().each(function(){
						if( jQuery(this).hasClass('hide') ){
							jQuery(this).removeClass('hide');
							jQuery(this).fadeIn();
						}
					});
				}else{
					filter_container.children().not('.' + select_filter).each(function(){
						if( !jQuery(this).hasClass('hide') ){
							jQuery(this).addClass('hide');
							jQuery(this).fadeOut();
						}
					});
					filter_container.children('.' + select_filter).each(function(){
						if( jQuery(this).hasClass('hide') ){
							jQuery(this).removeClass('hide');
							jQuery(this).fadeIn();
						}
					});
				}

				filter_container.masonry();

			});
		});
	}

});



function submitSearchForm() {

	var temp1 = $(".get-value-search").val();
	var temp2 = $(".get-value-search2").val();
	//alert(temp1);
	
	if(typeof temp1 === 'undefined' || temp1 == null)
	{
		temp1 = "";
	}
	
	if(typeof temp2 === 'undefined' || temp2 == null)
	{
		temp2 = "";
	}
	
	window.location.href = "/search.php?sch="+temp1+temp2;



}



/* ---------------------------------------------------------------------- */
/*	Google Map Function for Custom Style
/* ---------------------------------------------------------------------- */
function initialize() {
	"use strict";
	var MY_MAPTYPE_ID = 'custom_style';
	var map;
	var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
	var featureOpts = [
		{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}

	];
	var mapOptions = {
		zoom: 12,
		center: brooklyn,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	};

	map = new google.maps.Map(
		document.getElementById('map-canvas'),
		mapOptions
	);

	var styledMapOptions = {
		name: 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}


/* ---------------------------------------------------------------------- */
/*	Bookblock Script
/* ---------------------------------------------------------------------- */
var Page = (function() {

	var config = {
			$bookBlock : $( '#bb-bookblock' ),
			$navNext : $( '#bb-nav-next' ),
			$navPrev : $( '#bb-nav-prev' ),
			$navFirst : $( '#bb-nav-first' ),
			$navLast : $( '#bb-nav-last' )
		},
		init = function() {
			config.$bookBlock.bookblock( {
				speed : 1000,
				shadowSides : 0.8,
				shadowFlip : 0.4
			} );
			initEvents();
		},
		initEvents = function() {

			var $slides = config.$bookBlock.children();

			// add navigation events
			config.$navNext.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'next' );
				return false;
			} );

			config.$navPrev.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'prev' );
				return false;
			} );

			config.$navFirst.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'first' );
				return false;
			} );

			config.$navLast.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'last' );
				return false;
			} );

			// add swipe events
			$slides.on( {
				'swipeleft' : function( event ) {
					config.$bookBlock.bookblock( 'next' );
					return false;
				},
				'swiperight' : function( event ) {
					config.$bookBlock.bookblock( 'prev' );
					return false;
				}
			} );

			// add keyboard events
			$( document ).keydown( function(e) {
				var keyCode = e.keyCode || e.which,
					arrow = {
						left : 37,
						up : 38,
						right : 39,
						down : 40
					};

				switch (keyCode) {
					case arrow.left:
						config.$bookBlock.bookblock( 'prev' );
						break;
					case arrow.right:
						config.$bookBlock.bookblock( 'next' );
						break;
				}
			} );
		};

		return { init : init };

})();
/* ---------------------------------------------------------------------- */
/*	Bookblock Script
/* ---------------------------------------------------------------------- */
if($( '#bb-bookblock' ).length){
	Page.init();
}
