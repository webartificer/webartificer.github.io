$(window).on('load resize', function(){
	
	var nav = $('nav');
	var social_show = $('#social_block')
	var wHeight = $(window).height() - 66;

	
	$(window).scroll(function () {
		if ($(this).scrollTop() > wHeight) {
			nav.addClass("f_nav");
			social_show.addClass("social_on");
			social_show.addClass("wow");
		} else {
			nav.removeClass("f_nav");
			social_show.removeClass("social_on");
			social_show.removeClass("wow");
		}
	});

});