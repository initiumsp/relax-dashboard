define(["jquery", "md", "jquery.scrollTo.min"], function($, MobileDetect) {
	var breakpoints = {
                1400: 3,
                1024: 2,
                767: 1
        },
        init = function(){
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

                g4();
                g5();
                $('.videog').each(function(){
                        // console.log( $(this) )
                         videog( $(this) );
                });
                $('.sliderg').each( function(){
                        // console.log( $(this) )
                        sliderg( $(this) );
                });
	},
        g4 = function() {
                $g = $('#g4'), $b = $('#g4 .b');
                $b.click(function(e){
                        e.preventDefault();
                        $(this).addClass('filled');
                        if ( $(('#g4 .b:not(.filled)')).length <= 0 )
                                $('.b').removeClass('filled')

                })
        },
        g5 = function() {
                $g = $('#g5'),
                html = $('#g5 .expandable').html();

                // console.log(html)
        },
        videog = function( $g ) {
                // url = $(this).data('vid');
                console.log('videog')
                // console.log($(this))
        },
        sliderg = function( $g ) {
                console.log('sliderg')
                // console.log($(this))

        };
	init();
});
