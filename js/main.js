define(["jquery", "xdomain", "md", "jquery.scrollTo.min", "slick.min"], function($, xdomain, MobileDetect) {
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
            handleResponsive(mode);
        });
        $(this).trigger('resize');
        memory.requestUUID(function() {
            memory.sendMessage('render', '')
            memory.sendMessage('url', window.location.href);

            if(window.navigator.userAgent) {
                memory.sendMessage('userAgent', window.navigator.userAgent);
            }
            if(window.document.referrer) {
                memory.sendMessage('referrer', window.document.referrer);
            }
            memory.getStats('option',function(response){
                var total = 0, array = response.values;
                console.log(response);
            });
        });
        g1.init();
        g4();
        g5();
        g12();
        sliderg();
        videog();
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
            memory.sendMessage('option', 'g1');
        }
    },
    g4 = function() {
            var $g = $('#g4'), $b = $('#g4 .b');
            $b.bind('click',function(e){
                    e.preventDefault();
                    var $this = $(this);
                    if($this.hasClass('filled')) return;
                    $(this).html('<i class="deco'+(Math.floor(Math.random() * (3 - 1 + 1)) + 1)+'"></i>').addClass('filled');
                    setTimeout(function(){
                        $this.html('');
                    }, 130);
                    if ( $(('#g4 .b:not(.filled)')).length <= 0 )
                            $('.b').removeClass('filled')
            })
    },
    g5 = function() {
        var $g = $('#g5'), html =  $('#g5 .expandable').html();
        $('#g5 .expand').click(function(e){
            e.preventDefault();
            expandHiddenContent($g, html);
            $(this).removeClass('expand');
            if ($(window).width() <= 767)
                $('.sliderm').slick({arrows: false})
        })
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
    handleResponsive = function(mode){
        if ( mode == 'd' || mode == 't') {
            // reset slider
            $('.sliderm.slick-slider').slick('unslick')
            // reset video
            $('.videog').each(function(){
                $(this).html('<div class="g-inner"><a href="#" class="play">Play video</a></div>')
            })
        }
        else {
            // reset slider
            // $('.sliderm').slick({arrows: false})

            // reset video
            $('.videog').each(function(){
                html = getIframe( $(this) ).replace('?autoplay=1','');
                $(this).html( html ).addClass('iframe')
                $(this).find('.expandableContent').removeClass('expandableContent').removeClass('iframe').addClass('g-inner');
            })
        }
    },
    expandHiddenContent = function($g, html) {
        $('.g + .expandableContent').remove()
        var w = $(window).width(),
            col = w <= 767 ? 1 : w <= 1024 ? 2 : w <= 1400 ? 3 : 4, // breakpoints = { 1400: 3, 1024: 2, 767: 1 }
            index = $('#game_wrapper .g').index( $g )+1,
            insert_pos = Math.ceil(index/col)*col-1,
            closeButton = '<a href="#" class="round-btn close">Close</a>';

        $('#game_wrapper .g:eq('+insert_pos+')').after( $(html) );
        $('.g + .expandableContent').hide().slideDown().append( closeButton );

        $('.expandableContent .close').click(function(e){
            e.preventDefault();
            $(this).parent().slideUp()
        })
    },
    getIframe = function( $g ) {
        var vid = $g.data('vid'),
        url='https://www.youtube.com/embed/' + vid + '?autoplay=1',
        html = '<div class="iframe"><iframe id="ytplayer" type="text/html" width="100%" height="100%" src="' + url + '" frameborder="0"/></div>';
        return html;
    },
    appendShareCover = function( $g ) {
        html = '<div class="cover">分享<div class="share"></div><a href="#" class="round-btn close">Close</a></div>';
    },
    videog = function() {
        $('.videog .play').click(function(e){
            e.preventDefault();

            var $g = $(this).parents('.g'),
            title = $g.data('title').split('|'),
            desc = $g.data('desc'),
            html = '';

            html += '<div class="expandableContent video"><div class="wrapper cf"><div class="desc"><h3>';
            html += title[0] + '</h3><h2>' + title[1] + '</h2><p>' + desc + '</p><div class="share"></div></div>';
            html += getIframe( $g ) + '</div></div>';
            expandHiddenContent($g, html)
        });
    },
    sliderg = function() {
        $('.sliderg .slider').slick({
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="round-btn slick-prev">Prev</button>',
            nextArrow: '<button type="button" class="round-btn slick-next">Next</button>'
        });
    };
    xdomain.slaves({
        'http://s.initiumlab.com:8081': '/proxy.html'
    });
    var apiPrefix = 'http://s.initiumlab.com:8081/';
    var urlRemember = apiPrefix + 'remember/';
    var urlRecall = apiPrefix + 'recall/';
    var urlUUID = apiPrefix + 'utility/uuid/';
    var getUUID = function(){
        return $("#uuid").val();
    };

    var setUUID = function(uuid) {
        $("#uuid").val(uuid);
    };

    var memory = {
        eventname: 'depression-dashboard-test',
        getApiPrefix: function(callback){
          callback(apiPrefix);
        },
        requestUUID: function(callback){
          $.get(urlUUID).then(function(response){
            if (!getUUID()) {
              setUUID(response.data.uuid);
            }
            if (callback) {
              callback(response);
            }
          }, function(response){
            console.log('Error:' + response);
          });
        },
        getUUID: function(callback){
          if (!getUUID()) {
            memory.requestUUID(function(){
              callback(getUUID());
            });
          } else {
            callback(getUUID());
          }
        },
        sendMessage: function(key, value, raw, callback){
          var sendMessageFunction = function(){
            $.ajax(
                {
                    url: urlRemember + eventname + '/',
                    type: 'POST',
                    //dataType: 'JSON',
                    contentType: 'application/json;charset=UTF-8',
                    async: true,
                    data: JSON.stringify({
                        username: getUUID(),
                        key: key,
                        value: value,
                        raw: raw
                    }),
                    success: function(response){
                        //console.log(response);
                        if (callback) {
                            callback(response);
                        }
                    }
                }
            );
        };
        if (getUUID()) {
            sendMessageFunction();
        } else {
            memory.requestUUID(sendMessageFunction);
        }
    },
    getStats: function(key, callback){
      $.get(urlRecall + eventname + '/' + key + '/').then(function(response){
        //console.log(response);
        //console.log('Success:');
        callback(response)
      }, function(response){
        //console.log('Error:');
        //console.log(response);
      })
    }
    };
    // ---- End of Initium Memory Api Setup ----
    init();
});
