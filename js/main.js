define(["jquery", "md", "jquery.scrollTo.min", "slick.min"], function($, MobileDetect) {
	var init = function(){
		var mode;
        $(window).resize(function(){
            var w = $(window).width();
            if ( w >= 1024 ) {
                mode = 'd';
            }
            else if ( w >= 768 ) {
                mode = 't';
            }
            else {
                mode = 'm';
            }

            videog(mode);
        });
        $(this).trigger('resize');

        g4();
        g5();
        g12();
        sliderg();
    },
    g4 = function() {
        var $g = $('#g4'),
            $b = $('#g4 .b');
        $b.click(function(e){
            e.preventDefault();
            $(this).addClass('filled');
            if ( $(('#g4 .b:not(.filled)')).length <= 0 )
                $('.b').removeClass('filled')

        })
    },
    g5 = function() {
        var $g = $('#g5'), html =  $('#g5 .expandable').html();
        $('#g5 .expand').click(function(e){
            e.preventDefault();
            expandHiddenContent($g, html);
            $(this).removeClass('expand')
        })
    }
    expandHiddenContent = function($g, html) {
        $('.g + .expandableContent').remove()
        var w = $(window).width(),
            col = w <= 767 ? 1 : w <= 1024 ? 2 : w <= 1400 ? 3 : 4, // breakpoints = { 1400: 3, 1024: 2, 767: 1 }
            index = $('#game_wrapper .g').index( $g )+1,
            insert_pos = Math.ceil(index/col)*col-1;
            $(html).hide();
            $('#game_wrapper .g:eq('+insert_pos+')').after( $(html) );
            $(html).slideDown();
    },
    g12 = function() {
        var $g = $('#g12'),
        $emoji = $('#g12 .emoji'),
            bg = ['#23b8a7', '#d00', 'pink', '#eee', '#555'];

        $emoji.click(function(e) {
            e.preventDefault();
            index = $(this).data('index');
            $g.css('background', bg[index-1]);
        })
    },
    videog = function() {
        // $('.videog').each(function() {
        $('.videog .play').click(function(e){
            var vid = $(this).data('vid'),
            url='https://www.youtube.com/embed/' + vid + '?autoplay=1',
            html = '<div class="expandableContent iframe"><iframe id="ytplayer" type="text/html" width="100%" height="100%" src="' + url + '" frameborder="0"/></div>';

            $g = $(this).parents('.g');
            expandHiddenContent($g, html)
            // $('.videog .play').click(function(e){
            // })
        });
    },
    sliderg = function() {
        $('.sliderg .slider').slick({
            fade: true,
            arrows: false
        });
    };
    init();
});
