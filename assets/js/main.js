jQuery(document).ready(function($) {

  /* ======= Scrollspy ======= */
  $('body').scrollspy({ target: '#header', offset: 400});

  /* ======= Fixed header when scrolled ======= */

  $(window).bind('scroll', function() {
       if ($(window).scrollTop() > 50) {
           $('#header').addClass('navbar-fixed-top');
       }
       else {
           $('#header').removeClass('navbar-fixed-top');
       }
  });

  /* ======= ScrollTo ======= */
  $('a.scrollto').on('click', function(e){

      //store hash
      var target = this.hash;

      e.preventDefault();

	$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
      //Collapse mobile menu after clicking
	if ($('.navbar-collapse').hasClass('in')){
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	}
	});

  $('.courses').on('click', '.read-more', function(event) {
    event.preventDefault();
    $(this).closest('.container').find('.course-details').slideToggle(800)();
  });

  var owl = $("#student-testimonials");

  owl.owlCarousel({

    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    navigation : true,
    autoPlay: 3000

  });
});
