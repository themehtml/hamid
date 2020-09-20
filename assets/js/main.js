(function($) {
    "use strict";
	
	
		/*
			Author       	: Aminul
			Template Name	: Al-Hamid - Personal Portfolio Html Template
			Version      	: 1.0
		*/
		
		// Navbar menu-top
		var nav = $('nav');
		var navHeight = nav.outerHeight();

		$('.navbar-toggler').on('click', function () {
			if (!$('#menu-top').hasClass('navbar-collaps')) {
				$('#menu-top').addClass('navbar-collaps');
			}
		});		

		// Navbar Menu Reduce 
		
		$(window).trigger('scroll');
		$(window).on('scroll', function () {
			var pixels = 50;
			var top = 1200;
			if ($(window).scrollTop() > pixels) {
				$('.navbar-expand-md').addClass('navbar-collaps');
				$('.navbar-expand-md').removeClass('navbar-expend');
			} else {
				$('.navbar-expand-md').addClass('navbar-expend');
				$('.navbar-expand-md').removeClass('navbar-collaps');
			}
			if ($(window).scrollTop() > top) {
				$('.scrolltop-abh').fadeIn(1000, "easeInOutExpo");
			} else {
				$('.scrolltop-abh').fadeOut(1000, "easeInOutExpo");
			}
		});


		//  Star Scrolling nav
	
		$('a.page-scroll[href*="#"]:not([href="#"])').on("click", function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - navHeight + 30)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});

		// Closes responsive menu when a scroll trigger link is clicked
		
		$('.page-scroll').on("click", function () {
			$('.navbar-collapse').collapse('hide');
		});

		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
			target: '#menu-top',
			offset: navHeight
		});
        

		  //**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('navbar-collaps');
				$('.abh-back-to-top').addClass('open');
			} else {
				$('.abh-header-area').removeClass('navbar-collaps');
				$('.abh-back-to-top').removeClass('open');
			}
		  });
		  
		//**===================Scroll UP ===================**//

			if ($('.abh-back-to-top').length) {
			  $(".abh-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
			
		//**===================Scroll UP ===================**//
		

		

		// -----------------------------------------------------
		// ------------------ Magnific Popup -------------------
		// -----------------------------------------------------

		var magnifPopup = function() {
			$('.abh-popup-img').magnificPopup({
				type: 'image',
				removalDelay: 300,
				mainClass: 'mfp-with-zoom',
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true, // By default it's false, so don't forget to enable it

					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function

					// The "opener" function should return the element from which popup will be zoomed in
					// and to which popup will be scaled down
					// By defailt it looks for an image tag:
					opener: function(openerElement) {
						// openerElement is the element on which popup was initialized, in this case its <a> tag
						// you don't need to add "opener" option if this code matches your needs, it's defailt one.
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
			});
		};

		// Call the functions
		magnifPopup();
		

		$("#testimonial-slider").owlCarousel({
			margin:3,
			nav:false,
			loop:true,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:2
				}
			}
		});
			
	
		// typed-word
		var typed = new Typed('.typed-word', {
			strings: ["Ui/Ux Designer","Web Developer."," Web Designer."],
			typeSpeed: 40,
			backSpeed: 40,
			backDelay: 2000,
			startDelay: 1500,
			loop: true,
			showCursor: true
		});
		

        
})(jQuery);
$(window).load( function() {

	/*PRELOADER JS*/
		$('.abh-status').fadeOut();
		$('.abh-preloader').delay(350).fadeOut('slow'); 
	
	/*END PRELOADER JS*/
		
	// -----------------------------------------------------
	// ---------------- Porfolio isotope -------------------
	// -----------------------------------------------------  
	
    var portfolioIsotope = $('.abh-main-portfolio').isotope({
        itemSelector: '.abh-grid-portfolio'
    });

    $('#abh-portfolio-flters li').on('click', function() {
        $("#abh-portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
	
}); // window load end 
