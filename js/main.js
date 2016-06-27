
define(["jquery", "xdomain", "md", "soundmanager.min", "jquery.scrollTo.min", "slick.min", "bar-ui"], function($, xdomain, MobileDetect) {
    var mode, md = new MobileDetect(window.navigator.userAgent), t = (md.mobile() || md.tablet()), ev = (t)? 'touchstart' : 'click', hold = (t)? 'touchstart' : 'mousedown', release = (t)? 'touchend' : 'mouseup';
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
            if ( ! $('body').hasClass(mode) ) {
                $('body').removeClass('d t m').addClass(mode)
                handleResponsive(mode);
            }
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
        g2.init();
        g4.init();
        g5();
        g7();
        g12();
        sliderg();
        videog();
        g9.init();
        g10.init();
        emoji();
        $('.share-cover').bind('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            $(this).fadeOut();
            if($(this).parents('#g2:first').length ==1){
                g2.playsmoke= true;
                setTimeout(g2.setImage, 300);
            }
        });
        $('body').delegate('.fb-share', ev, function(e){
            var url = $(this).data('share-href');
            window.open(url,'','menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=368,width=600');
            return false;
        });
        $('body').delegate('.tw-share', ev, function(e){
            var url = $(this).data('share-href');
            window.open(url,'','menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=400,width=600');
            return false;
        });
    },
    emoji = function() {
        $('.emoji').click(function(e){
            e.preventDefault();
            $(this).parent().find('.emoji').removeClass('active')
            $(this).addClass('active')
            ga('send', 'event', 'emoji', 'click', $(this).parent().find('.emoji').index($(this)));
        })
    },
    g1 = {
        wrapper: $('#g1'),
        pen: $('#pen'),
        $count: $('#g1 .count .val'),
        $refill: $('#pen .refill'),
        count: 0,
        clicks: 0,
        times: 10,
        refill: {left: 0, bottom: 0, w: 0, h: 0},
        timer: null,
        init: function(){
        $('body').delegate('#g1', ev, function(e){
            g1.penClick();
        });
        this.refill.w = this.$refill.width();
        this.refill.h = this.$refill.height();
        },
        penClick: function(){
            if(this.timer!=null){
                clearTimeout(this.timer);
                this.timer = null;
            }
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
            this.timer = setTimeout(function(){
                share('#g1');
            }, 3000);
        },
        displayText: function(el, num){
            var length=(num+'').length;
            console.log(num, length);
            for(var n=0; n < (4-length); n++){
                num = '0'+num;
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
            ga('send', 'event', 'g1', 'dropped');
        }
    },
    g2 = {
        imgi: 0,
        imgi2: 0,
        smokes_uri: './images/mirror/smoke/',
        bg_uri: './images/mirror/bg/',
        playsmoke: true,
        playbg: false,
        timer: null,
        timer2: null,
        init: function(){
            this.imgi = 0;
            $("#smoke").css('backgroundImage', 'url('+this.smokes_uri+this.imgi+'.png'+')').show();
            if(g2.playsmoke)
                setTimeout(g2.setImage, 300);
            $('#g2').bind(hold, function (e) {
                if($(e.target).hasClass('share-cover')) return;
                g2.playbg = true;
                setTimeout(function(){g2.setImage2(false)}, 300);
                if(g2.timer2!=null){
                    clearTimeout(g2.timer2);
                    g2.timer2 = null;
                }
            }).bind(release, function(e){
                if($(e.target).hasClass('share-cover')) return;
                g2.playbg = true;
                setTimeout(function(){g2.setImage2(true)}, 300);
                g2.timer2 = setTimeout(function(){
                    share('#g2');
                    g2.playsmoke = false;
                }, 3000);
            });
        },
        setImage: function(){
            g2.imgi++;
            if(g2.imgi>17)
                g2.imgi = 0;
            var next=new Image();
            next.onload=function(){
                $("#smoke").css("backgroundImage",  'url('+this.src+')');
            }
            next.src= g2.smokes_uri+g2.imgi+'.png';
            if(g2.playsmoke)
                setTimeout(g2.setImage, 300);
        },
        setImage2: function(revert){
            if(revert)
                g2.imgi2--;
            else
                g2.imgi2++;
            if(g2.imgi2>23){
                g2.playbg = false;
                return;
            }
            if(g2.imgi2 < 0){
                g2.playbg = false;
                g2.imgi2 = 0;
                return;
            }
            var next=new Image();
            next.onload=function(){
                $("#mirror").css("backgroundImage",  'url('+this.src+')');
            }
            next.src= g2.bg_uri+g2.imgi2+'.jpg';
            if(g2.timer!=null){
                clearTimeout(g2.timer);
                g2.timer = null;
            }
            if(g2.playbg)
                g2.timer = setTimeout(function(){g2.setImage2(revert)}, 100);
        }

    },
    share = function(gid){
        $(gid).find('.share-cover').fadeIn();

    },
    g10 = {
        ready: false,
        timer: null,
        init: function(){
            if(window.sm2BarPlayers[0]!='undefined'){
                g10.ready  = true;
            }
            $('#g10 .audio-play').bind('click', function(e){
                e.preventDefault();
                if(!g10.ready)
                    return;
                if($('#g9').hasClass('playing')){
                    $('#g9 .audio-play').trigger('click');
                }
                var $parent = $('#g10');
                $parent.toggleClass('playing')
                if($parent.hasClass('playing')){
                    if(g10.timer!=null){
                        clearTimeout(g10.timer);
                        g10.timer = null;
                    }
                    window.sm2BarPlayers[0].actions.play();
                }
                else{
                    window.sm2BarPlayers[0].actions.pause();
                    g10.timer = setTimeout(function(){
                        share('#g10');
                    }, 3000);
                }
            });
            window.sm2BarPlayers.on['end'] = function(){
                $('#g10').removeClass('playing');share('#g10');
            };
        }
    },
    g9 = {
        isready: false,
        timer: null,
        playing: '',
        init: function(){
            soundManager.setup({
              url: './swf/',
              flashVersion: 9,
              onready: function() {
                g9.isready = true;
                soundManager.createSound({
                  id: 'yoga',
                  url: './yoga.mp3',
                  autoLoad: true,
                  autoPlay: false,
                  onload: function() {
                    $('.g[data-vid="'+this.id+'"]').addClass('ready');
                  },
                  volume: 50
                });
              }
            });
            $('#g9 .audio-play').bind('click', function(e){
                e.preventDefault();
                if($('#g10').hasClass('playing')){
                    $('#g10 .audio-play').trigger('click');
                }
                var $parent = $('#g9');
                //if(!$parent.hasClass('ready')) return;
                $parent.toggleClass('playing')
                if($parent.hasClass('playing'))
                    g9.play($parent.data('vid'));
                else
                    g9.pause($parent.data('vid'));
            });
        },
        play: function(id){
            if(g9.timer!=null){
                clearTimeout(g9.timer);
                g9.timer = null;
            }
            soundManager.play(id,{volume:50,onfinish:function(){
                share('#g9');
                $('.g[data-vid="'+id+'"]').removeClass('playing');
            }});
            this.playing = id;
        },
        pause: function(id){
            soundManager.pause(id);
            g9.timer = setTimeout(function(){
                share('#g9');
            }, 3000);
        }
    },
    g4 = {
        timer: null,
        init: function(){
            var $g = $('#g4'), $b = $('#g4 .b');
            $b.bind('click',function(e){
                if(g4.timer!=null){
                    clearTimeout(g4.timer);
                    g4.timer = null;
                }
                    e.preventDefault();
                    var $this = $(this);
                    if($this.hasClass('filled')) return;
                    $(this).html('<i class="deco'+(Math.floor(Math.random() * (3 - 1 + 1)) + 1)+'"></i>').addClass('filled');
                    setTimeout(function(){
                        $this.html('');
                    }, 130);
                    if ( $(('#g4 .b:not(.filled)')).length <= 0 )
                            $('.b').removeClass('filled')
                    g4.timer = setTimeout(function(){
                        share('#g4');
                    }, 3000);
            });
        }
    },
    convert_str_to_icon = function (str) {
        // 1: sunny
        // 2: partly sunny
        // 3: cloudy
        // 4: rain
        if(str.indexOf('大 致 天 晴') != -1) {
            return './images/weather/sunny.png';
        } else if(str.indexOf('時 間 有 陽 光') != -1) {
            return './images/weather/mostly-sunny.png';
        } else if(str.indexOf('大 致 多 雲') != -1) {
            return './images/weather/cloudy.png';
        } else if(str.indexOf('雨') != -1) {
            return './images/weather/raining.png';
        } else {
            return './images/weather/sunny.png';
        }
    },
    convert_weekday = function(weekday) {
        if(weekday == 0) {
            weekday = 'Sunday';
        } else if(weekday == 1) {
            weekday = 'Monday';
        } else if(weekday == 2) {
            weekday = 'Tuesday';
        } else if(weekday == 3) {
            weekday = 'Wednesday';
        } else if(weekday == 4) {
            weekday = 'Thursday';
        } else if(weekday == 5) {
            weekday = 'Friday';
        } else if(weekday == 6) {
            weekday = 'Saturday';
        }
        return weekday;
    },
    g5 = function() {
        var $g = $('#g5'), html;


        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var weekday = date.getDay();
        $('#g5 .content .weekday').text(convert_weekday(weekday));
        $('#g5 .content .date').text(day+'/'+(month+1));
        for (var i = 1; i <= 4; i++) {
            var date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000*i);
            var day = date.getDate();
            var month = date.getMonth();
            var weekday = date.getDay();
            $('.g5_expandable .item:eq('+(i-1)+') .weekday').text(convert_weekday(weekday));
            $('.g5_expandable .item:eq('+(i-1)+') .date').text(day+'/'+(month+1));
        };
        $.ajax({
            url: './SeveralDaysWeatherForecast_uc.xml',
            dataType: 'text',
            success: function(data) {
                var start_pos = data.indexOf('<description><![CDATA[');
                var end_pos = data.indexOf(']]></description>');
                var str = data.substr(start_pos+'<description><![CDATA['.length, end_pos-start_pos-'<description><![CDATA['.length).trim().split('\n');
                //line 4 is today
                var desc = str[4].substr(0,str[4].length-6).trim();
                // $('#g5 .content p').text(desc);
                $('#g5 .content img').attr('src', convert_str_to_icon(desc));
                for (var i = 1; i <= 4; i++) {
                    //line 14 is tmr
                    //line 24
                    var k = i*10+4;
                    var desc = str[k].substr(0,str[k].length-6).trim();
                    $('.g5_expandable .item:eq('+(i-1)+') p').text(desc);
                    $('.g5_expandable .item:eq('+(i-1)+') img').attr('src', convert_str_to_icon(desc));
                }

                html =  $('#g5 .expandable').html();
            }
        });
        $('#g5 .expand').click(function(e){
            e.preventDefault();
            expandHiddenContent($g, html);
            $(this).removeClass('expand');
            if ($(window).width() <= 767 && $('.g+.expandableContent').find('.slick-initialized').length !== 1){
                $('.g+.expandableContent .sliderm').slick({arrows: false})
            } else {
                $('.g+.expandableContent .sliderm').slick('unslick').slick({arrows: false})
            }
            $('#g5 .centered .round-btn').fadeOut();
        })
    },
    g7 = function() {
        $('img').click(function(){
            $('#g7').find('.slider-share').fadeToggle();
        })
    },
    g12 = function() {
        var $g = $('#g12'),
        $emoji = $('#g12 .emoji');
        for(var i = 1; i <5; i++){
            var img = new Image();
            img.src = "./images/emoji/bg"+i+".jpg";
        }
        $emoji.click(function(e) {
            e.preventDefault();
            index = $(this).data('index');
            $g.css('background', 'url("./images/emoji/bg' + index + '.jpg")');
            setTimeout(function(){
                share('#g12');
            },1000)
            ga('send', 'event', 'g12', 'click', $(this).parent().find('.emoji').index($(this)));
        })
    },
    handleResponsive = function(mode){
            $('.g+expandableContent').remove();
        if ( mode == 'd' || mode == 't') {
            // reset slider
            $('.sliderm.slick-slider').slick('unslick')
            // reset video
            $('.videog').each(function(){
                $(this).removeClass('iframe')
                $(this).html('<div class="g-inner"><a href="#" class="play"><span class="sp sp-play">Play video</span></a></div>');
                videog()
            })
        }
        else {
            // reset slider
            // $('.sliderm').slick({arrows: false})

            // reset video
            $('.videog').each(function(){
                html = getIframe( $(this) ).replace('?autoplay=1','');
                $(this).html( html ).addClass('iframe')
                $(this).find('.iframe').removeClass('iframe').addClass('g-inner');
            })
        }
    },
    expandHiddenContent = function($g, html) {
        $('.g + .expandableContent').remove()
        var w = $(window).width(),
            col = w <= 767 ? 1 : w <= 1024 ? 2 : w <= 1400 ? 3 : 4, // breakpoints = { 1400: 3, 1024: 2, 767: 1 }
            index = $('#game_wrapper .g').index( $g )+1,
            insert_pos = Math.ceil(index/col)*col-1,
            closeButton = '<a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>';

        $('#game_wrapper .g:eq('+insert_pos+')').after( $(html) );
        $('.g + .expandableContent').hide().slideDown().append( closeButton );

        $('.expandableContent .close').click(function(e){
            e.preventDefault();
            $(this).parent().slideUp();
            if ($(window).width()<768)
                $('#g5 .g-inner .round-btn').fadeIn();
        })
    },
    getIframe = function( $g ) {
        var vid = $g.data('vid'),
        url='https://www.youtube.com/embed/' + vid + '?autoplay=1',
        html = '<div class="iframe"><iframe id="ytplayer" type="text/html" width="100%" height="100%" src="' + url + '" frameborder="0"/></div>';
        return html;
    },
    videog = function() {
        $('.videog .play').click(function(e){
            e.preventDefault();

            var $g = $(this).parents('.g'),
            title = $g.data('title').split('|'),
            desc = $g.data('desc'),
            html = '';

            html += '<div class="expandableContent video"><div class="wrapper cf"><div class="desc"><h3>';
            html += title[0] + '</h3><h2 class="title-yellow">' + title[1] + '</h2><p>' + desc + '</p><div class="share" style="display:block"><p class="title-yellow">分享</p><a href="#" target="_blank" class="round-btn"><span class="sp sp-fb">Share to facebook</span></a><a href="#" target="_blank" class="round-btn"><span class="sp sp-tt">Share to twitter</span></a> </div></div>';
            html += getIframe( $g ) + '</div></div>';
            expandHiddenContent($g, html)
        });
    },
    sliderg = function() {
        config = {
            fade: true,
            arrows: true,
            lazyLoad: 'progressive',
            prevArrow: '<button type="button" class="round-btn slick-prev"><span class="sp sp-prev">Prev</span></button>',
            nextArrow: '<button type="button" class="round-btn slick-next"><span class="sp sp-next">Next</span></button>'
        };
        $('.sliderg .slider').slick(config);
    };
    xdomain.slaves({
        'https://ss.initiumlab.com/': '/proxy.html'
    });
    var apiPrefix = 'https://ss.initiumlab.com/';
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
