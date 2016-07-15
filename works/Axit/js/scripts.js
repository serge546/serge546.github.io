$(document).ready(function(){
	
	$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
    $(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs-content').removeClass('active').css('display','none').eq($(this).index()).fadeIn(1000);
	});
	
	$('nav a').click(function(e){
		e.preventDefault();
		var anchor = $(this).attr("href");
		var destination = $(anchor).offset().top;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 800);
	});
});