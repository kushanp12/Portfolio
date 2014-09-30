$(document).ready(function(){
	
	$('.get-to-know').click(function(e){
		openPortfolio();
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
	$('.t-link').click(function(e){
		$('.experience').show();
		$("html, body").animate({ scrollTop: parseInt( $('#testimonial').position().top ) - 50 }, 1000);
		e.preventDefault();
	})
	$('.arrow').click(function(e){
		$('.experience').slideToggle();
		e.preventDefault();
	})
	$('.menu').click(function(e){
		$("html, body").animate({ scrollTop: parseInt( $('#home').position().top ) - 50 }, 1000);
		e.preventDefault();
	})
	$('.menu').click(function(e){
		closePortfolio();
		e.preventDefault();
	});
});

var openPortfolio = function(){
		$('.about, .contact, .designs, footer').show();
		$("html, body").animate({ scrollTop: parseInt( $('#about').position().top ) - 50 }, 1000);
		$('.about-text, .contact-text, .portfolio-text').fadeIn('slow');
}

var closePortfolio = function(){
		$('.about-text, .contact-text, .portfolio-text').fadeOut('slow');
		$('.about, .contact, .designs, .experience, footer').fadeOut('slow');
}

