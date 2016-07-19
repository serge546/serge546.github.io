$(document).ready(function(){
	
	$('.more a').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active').closest('.work').children('p').slideToggle(200);
	});
	
	$('nav a').click(function(e){
		e.preventDefault();
		var anchor = $(this).attr("href");
		var valHeight = $(anchor).offset().top;
		var destination = valHeight - 90;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 500);
	});
	
});