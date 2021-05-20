$(document).ready(function(){
	$('.social-video-link').fancybox();

	$('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});

	$('.video-section').slick({
		dots: true,
		arrows: false
	});

	if (parseInt($(window).width()) >= 768) {
		var animateTextRecursive = function(a, obj){
			var p = a.splice(0,1);
			
			var space = 60;
			
			setTimeout(function(){ $(p).css({'font-size': '36px' ,'font-weight':400})}, space*0);
			setTimeout(function(){ $(p).css({'font-size': '38px' ,'font-weight':500})}, space*1);
			setTimeout(function(){ $(p).css({'font-size': '40px' ,'font-weight':600})}, space*2);
			setTimeout(function(){ $(p).css({'font-size': '43px' ,'font-weight':700})}, space*3);
			setTimeout(function(){ $(p).css({'font-size': '45px' ,'font-weight':800})}, space*4);
			setTimeout(function(){ $(p).css({'font-size': '47px' ,'font-weight':900})}, space*5);
			setTimeout(function(){ $(p).css({'font-size': '50px' ,'font-weight':1000})}, space*6);
			
			if(a.length == 0){
			  setTimeout(function(){ animatePs(obj)}, space*200);
			}else{
			  setTimeout(function(){ animateTextRecursive(a, obj)}, space*20);
			}
		
			setTimeout(function(){ $(p).css({'font-size': '48px' ,'font-weight':1000})}, space*20);
			setTimeout(function(){ $(p).css({'font-size': '46px' ,'font-weight':900})}, space*21);
			setTimeout(function(){ $(p).css({'font-size': '42px' ,'font-weight':800})}, space*22);
			setTimeout(function(){ $(p).css({'font-size': '42px' ,'font-weight':700})}, space*23);
			setTimeout(function(){ $(p).css({'font-size': '40px' ,'font-weight':600})}, space*24);
			setTimeout(function(){ $(p).css({'font-size': '38px' ,'font-weight':500})}, space*25);
			setTimeout(function(){ $(p).css({'font-size': '36px' ,'font-weight':400})}, space*26);
		  }
			
		  var animatePs = function(obj){
			animateTextRecursive ($("p, span", obj), obj)
		  }
			
		  animatePs($("#info"));

	} else if (parseInt($(window).width()) < 768) {
		var animateTextRecursive = function(a, obj){
			var p = a.splice(0,1);
			
			var space = 60;
			
			setTimeout(function(){ $(p).css({'font-size': '22px' ,'font-weight':400})}, space*0);
			setTimeout(function(){ $(p).css({'font-size': '24px' ,'font-weight':500})}, space*1);
			setTimeout(function(){ $(p).css({'font-size': '26px' ,'font-weight':600})}, space*2);
			setTimeout(function(){ $(p).css({'font-size': '28px' ,'font-weight':700})}, space*3);
			setTimeout(function(){ $(p).css({'font-size': '30px' ,'font-weight':800})}, space*4);
			setTimeout(function(){ $(p).css({'font-size': '32px' ,'font-weight':900})}, space*5);
			setTimeout(function(){ $(p).css({'font-size': '34px' ,'font-weight':1000})}, space*6);
			
			if(a.length == 0){
			  setTimeout(function(){ animatePs(obj)}, space*200);
			}else{
			  setTimeout(function(){ animateTextRecursive(a, obj)}, space*20);
			}
		
			setTimeout(function(){ $(p).css({'font-size': '34px' ,'font-weight':1000})}, space*20);
			setTimeout(function(){ $(p).css({'font-size': '32px' ,'font-weight':900})}, space*21);
			setTimeout(function(){ $(p).css({'font-size': '30px' ,'font-weight':800})}, space*22);
			setTimeout(function(){ $(p).css({'font-size': '28px' ,'font-weight':700})}, space*23);
			setTimeout(function(){ $(p).css({'font-size': '26px' ,'font-weight':600})}, space*24);
			setTimeout(function(){ $(p).css({'font-size': '24px' ,'font-weight':500})}, space*25);
			setTimeout(function(){ $(p).css({'font-size': '22px' ,'font-weight':400})}, space*26);
		  }
			
		  var animatePs = function(obj){
			animateTextRecursive ($("p, span", obj), obj)
		  }
			
		  animatePs($("#info"));
    }
	
	$(".nav-link").click(function(){
		$('#navbarTogglerDemo02').removeClass('show');
	});

	$("#cover-item").click(function() {
		$('body,html').animate({
            scrollTop: $('#cover').offset().top
        }, 1000);
        return false;
	});

	$("#audiencia-item").click(function() {
		$('body,html').animate({
            scrollTop: $('#audiencia').offset().top
        }, 1000);
        return false;
	});

	$("#quest-item").click(function() {
		$('body,html').animate({
            scrollTop: $('#quest').offset().top
        }, 1000);
        return false;
	});

	$("#client-item").click(function() {
		$('body,html').animate({
            scrollTop: $('#client').offset().top
        }, 1000);
        return false;
	});
	
	$('#audiencia').waypoint(function(){
		$('#countdown').animateNumber(
			{number:6001000}, 
			2000,
			function() {
				$('#countdown').hide();
				$('#txt-count').fadeIn();
			}
		);
		/*$('#count-percentage').animateNumber(
			{number:91}, 
			2000,
			function() {
				$('#count-percentage').hide();
				$('#percentage').fadeIn();
			}
		);
		$('#count-millions').animateNumber(
			{number:4500000}, 
			2000,
			function() {
				$('#count-millions').hide();
				$('#millions').fadeIn();
			}
		);
		$('#count-miles').animateNumber(
			{number:30000000}, 
			2000,
			function() {
				$('#count-miles').hide();
				$('#miles').fadeIn();
			}
		)*/}, {offset: '40%'}
	);

	/*$('.title-quest').waypoint(function(){
		$('#cdmx').animateNumber(
			{number:17}, 
			2000,
			function() {
				$('#cdmx').hide();
				$('#cdmx-final').fadeIn();
			}
		);
		$('#mx').animateNumber(
			{number:83}, 
			2000,
			function() {
				$('#mx').hide();
				$('#mx-final').fadeIn();
			}
		);
		$('#women').animateNumber(
			{number:25}, 
			2000,
			function() {
				$('#women').hide();
				$('#women-final').fadeIn();
			}
		);
		$('#men').animateNumber(
			{number:75}, 
			2000,
			function() {
				$('#men').hide();
				$('#men-final').fadeIn();
			}
		);
		$('#young').animateNumber(
			{number:79}, 
			2000,
			function() {
				$('#young').hide();
				$('#young-final').fadeIn();
			}
		);
		$('#old').animateNumber(
			{number:21}, 
			2000,
			function() {
				$('#old').hide();
				$('#old-final').fadeIn();
			}
		)}, {offset: '40%'}
	);*/

	$("#estrategia-item").click(function() {
		$("#video-make-contenido").css('display', 'none');
		$("#video-make-experiencia").css('display', 'none');
		$("#video-make-estrategia").css('display', 'block');
		$(".video-item").hide();
		$("#experiencia-item").show();
		$("#contenido-item").show();
	});

	$("#experiencia-item").click(function() {
		$("#video-make-contenido").css('display', 'none');
		$("#video-make-estrategia").css('display', 'none');
		$("#video-make-experiencia").css('display', 'block');
		$(".video-item").hide();
		$("#estrategia-item").show();
		$("#contenido-item").show();
	});

	$("#contenido-item").click(function() {
		$("#video-make-experiencia").css('display', 'none');
		$("#video-make-estrategia").css('display', 'none');
		$("#video-make-contenido").css('display', 'block');
		$(".video-item").hide();
		$("#experiencia-item").show();
		$("#estrategia-item").show();
	});

	$('#combo-select').change(function () {
		var idioma = $('#combo-select option:selected').val();
		if (idioma == 'spanish') {
			window.location.href = "https://underdog.mx/es/index.html";
		} else if (idioma == 'ingles') {
			window.location.href = "https://underdog.mx/";
		}
	});
});