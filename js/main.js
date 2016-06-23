define(["jquery", "md", "jquery.scrollTo.min"], function($, MobileDetect) {
	var init = function(){
		var mode;
        $(window).resize(function(){
        	var w = $(window).width();
        	if (w >=1024) {
        		mode = 'd';
        	}
        	else if (w >=768) {
        		mode = 't';
        	}
        	else{
        		mode = 'm';
        	}
        });

        $(this).trigger('resize');

		
	};
	init();
});
