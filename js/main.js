//main nav//

var stickyNavOffset = $('.main_nav').offset().top;

$(document).ready(function(){

	$("#slogan").fadeIn(3000);
 
})


$(window).on('scroll',function() {

	if ( $(window).scrollTop() > stickyNavOffset) {
		$('.main_nav').addClass('scrolled');
	}	

	else { $('.main_nav').removeClass('scrolled');
	}
		
});
 
//slogan fade in//

$('').load('fade-in', 300);

//.sub_nav scroll//

$('.sub_nav a').on('click',function(e){
	e.preventDefault();
	var thisTarget = $(this).attr('href');

	$('body').animate({
	}, 600);
});
	
//.sub_nav hover//

$('.sub_nav a').on('mouseover', function(){
	$(this).toggleClass('navhover');
});

$('.sub_nav a').on('mouseout', function(){
	$(this).toggleClass('navhover');
});



