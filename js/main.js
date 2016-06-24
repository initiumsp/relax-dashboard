define(["jquery", "md", "jquery.scrollTo.min"], function($, MobileDetect) {
    var mode, md = new MobileDetect(window.navigator.userAgent), t = (md.mobile() || md.tablet());
	var breakpoints = {
                1400: 3,
                1024: 2,
                767: 1
        },
        init = function(){
        if(t) $('body').addClass('touch');
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
                g1.init();
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
        g1 = {
            wrapper: $('#g1'),
            pen: $('#pen'),
            e: (t)? 'touchstart' : 'click',
            $count: $('#g1 .count .val'),
            $refill: $('#pen .refill'),
            count: 0,
            clicks: 0,
            times: 10,
            refill: {left: 0, bottom: 0, w: 0, h: 0},
            init: function(){
            $('body').delegate('#g1', this.e, function(e){
                g1.penClick();
            });
            this.refill.w = this.$refill.width();
            this.refill.h = this.$refill.height();
            },
            penClick: function(){
                this.clicks++;
                this.pen.addClass('on');
                setTimeout(function(){
                    g1.pen.removeClass('on');
                }, 130);
                if(this.clicks%10 == 0){
                    this.next();
                }
                this.displayText(this.wrapper.find('.clicks .val'), this.clicks);
                this.refill.bottom = this.refill.bottom - (this.refill.h / this.times);
                this.refill.left = this.refill.left - (this.refill.w / this.times);
                this.$refill.css({left: this.refill.left, bottom: this.refill.bottom});
            },
            displayText: function(el, num){
                var length=(num+'').length;
                console.log(num, length);
                for(var n=0; n < (4-length); n++){
                    num = '0'+num;
                    console.log(num);
                }
                el.text(num);
            },
            next: function(){
                this.count = Math.floor(this.clicks / this.times);
                this.displayText(this.$count, this.count);
                this.$refill.css({'-webkit-transition-duration': '400ms','-moz-transition-duration': '400ms','transition-duration':'400ms'}).addClass('fall');
                setTimeout(function(){
                    g1.refill.left = 0, g1.refill.bottom = 0;
                    g1.$refill.removeAttr('style').removeClass('fall');
                }, 400);
            }
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
