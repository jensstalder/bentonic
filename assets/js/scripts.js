(function($) {
	"use strict";
	
	document.querySelector('.nav_slide_button').addEventListener('click', function () {
		$('.pull').slideToggle();
	});
	
	document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
	});
	
	$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	$('footer').footerReveal();
	
	$("#twitter").twitterFetcher({
        widgetid: '798248339884142593', 
        maxTweets: 5,
        enablePermalink: true,
		lang: "en"
    });
	
	$('#nospacegallery').justifiedGallery({
		rowHeight :240,
		lastRow : 'justify',
	  captions: false,
		margins : 0
	});
	
	 jQuery(".gmap").each(function(){
        var address = jQuery(this).attr('data-location');
		jQuery(this).gMap({ address: address, zoom:13, markers:[{address: address}] 
	});
	
        })

	});	
})(jQuery);




