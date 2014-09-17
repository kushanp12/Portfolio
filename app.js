$(document).ready(function(){
	$('.get-to-know').click(function(e){
		$('.about, .contact, .designs, footer').show();
		$("html, body").animate({ scrollTop: parseInt( $('#about').position().top ) - 50 }, 1000);
		$('.about-text, .contact-text, .portfolio-text').fadeIn('slow');
		e.preventDefault();
	})
	$('.portfolio-text').click(function(e){
		$("html, body").animate({ scrollTop: parseInt( $('#designs').position().top ) - 50 }, 1000);
		e.preventDefault();
	})
	$('.contact-text').click(function(e){
		$("html, body").animate({ scrollTop: parseInt( $('#contact').position().top ) - 50 }, 1000);
		e.preventDefault();
	})
	$('.about-text').click(function(e){
		$("html, body").animate({ scrollTop: parseInt( $('#about').position().top ) - 50 }, 1000);
		e.preventDefault();
	})
	$('.menu').click(function(e){
		$("html, body").animate({ scrollTop: parseInt( $('#home').position().top ) - 50 }, 1000);
		e.preventDefault();
	})
	$('.menu').click(function(e){
		$('.about-text, .contact-text, .portfolio-text').fadeOut('slow');
		$('.about, .contact, .designs, footer').fadeOut('slow');
		e.preventDefault();
	});
});