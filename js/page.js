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
			6000,
			function() {
				$('#countdown').hide();
				$('#txt-count').fadeIn();
			}
		);
		$('#count-percentage').animateNumber(
			{number:85}, 
			3000,
			function() {
				$('#count-percentage').hide();
				$('#percentage').fadeIn();
			}
		);
		$('#count-millions').animateNumber(
			{number:4600000}, 
			4000,
			function() {
				$('#count-millions').hide();
				$('#millions').fadeIn();
			}
		);
		$('#count-miles').animateNumber(
			{number:6001000}, 
			4000,
			function() {
				$('#count-miles').hide();
				$('#miles').fadeIn();
			}
		)}, {offset: '40%'}
	);

	$('.title-quest').waypoint(function(){
		$('#cdmx').animateNumber(
			{number:85}, 
			3000,
			function() {
				$('#cdmx').hide();
				$('#cdmx-final').fadeIn();
			}
		);
		$('#mx').animateNumber(
			{number:84}, 
			3000,
			function() {
				$('#mx').hide();
				$('#mx-final').fadeIn();
			}
		);
		$('#women').animateNumber(
			{number:83}, 
			3000,
			function() {
				$('#women').hide();
				$('#women-final').fadeIn();
			}
		);
		$('#men').animateNumber(
			{number:82}, 
			3000,
			function() {
				$('#men').hide();
				$('#men-final').fadeIn();
			}
		);
		$('#young').animateNumber(
			{number:81}, 
			3000,
			function() {
				$('#young').hide();
				$('#young-final').fadeIn();
			}
		);
		$('#old').animateNumber(
			{number:80}, 
			3000,
			function() {
				$('#old').hide();
				$('#old-final').fadeIn();
			}
		)}, {offset: '40%'}
	);

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