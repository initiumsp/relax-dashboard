<?php include 'config.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><?php echo $tc_title;?> | 端傳媒 Initium Media</title>
<link rel="shortcut icon" href="https://d3rhr7kgmtrq1v.cloudfront.net/static/img/favicon.ico">
<meta name="description" content="<?php echo $tc_desc;?>">
<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="<?php echo $base_url;?>">
<meta name="twitter:title" content="<?php echo $tc_title;?>">
<meta name="twitter:description" content="<?php echo $tc_desc;?>">
<meta name="twitter:domain" content="theinitium.com">
<meta name="twitter:site" content="@initiumnews">
<meta name="twitter:creator" content="@initiumnews">
<meta name="twitter:image:src" content="<?php echo $base_url;?>images/share.jpg">
<meta property="og:title" content="<?php echo $tc_title;?>"/>
<meta property="og:description" content="<?php echo $tc_desc;?>"/>
<meta property="og:url" content="<?php echo $base_url;?>"/>
<meta property="og:site_name" content=""/>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?php echo $base_url;?>images/share.jpg"/>
<link href='https://fonts.googleapis.com/css?family=Advent+Pro:700' rel='stylesheet' type='text/css'>
<script type="text/javascript">
  var base_url = './';
  var lang = 'tc';
</script>

<script data-main="./js/app" src="./js/require.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-66625644-23', 'auto');
  ga('send', 'pageview');

</script>
<link href="./css/all.css" rel="stylesheet" media="screen">
<!--[if IE]>
<link rel="stylesheet" type="text/css" href="./css/ie.css" />
<![endif]-->
</head>
<body class="tc">
<header>
  <div class="logos">
    <p>合作機構</p>
    <a href="http://csrp.hku.hk" target="_blank" class="hku"><img src="./images/crsp-logo.png" alt="香港大學"></a>
    <a href="https://theinitium.com/" target="_blank" class="initium"><img src="./images/initium-logo.png" alt="端傳媒"></a>
  </div>
  <h1><img src="./images/logo.png" alt="12格遇上天藍"></h1>
  <p>你最近還好嗎﹖<br class="mobile-only">尚愛看少女／少男漫畫嗎﹖<br>來這裡放空、放鬆，重遇藍天下的自己。
    <span class="share">
      <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>" target="_blank" class="fb-share round-btn"><span class="sp sp-fb">Share to facebook</span></a>
      <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>" target="_blank" class="tw-share round-btn"><span class="sp sp-tt">Share to twitter</span></a>
    </span>
  </p>
</header>
<div id="game_wrapper" class="cf">
  <div class="decor">
    <p>Hi～歡迎來到這裏﹗<br>你現在心情如何﹖</p>
    <div class="emoji-wrapper cf">
    <a href="#" class="emoji emoji1"></a>
    <a href="#" class="emoji emoji2"></a>
    <a href="#" class="emoji emoji3"></a>
    <a href="#" class="emoji emoji4"></a>
    <a href="#" class="emoji emoji5"></a>
    </div>
  </div>
  <div class="g inactive" id="g1">
    <div class="g-inner">
      <span class="count"><span class="advent">Pencil refilled:</span><br/><span class="val">0000</span></span>
      <div class="clicks hidden">Pens clicks:<div class="val">0000</div></div>
      <div id="pen">
        <div class="refill"></div>
        <div class="body"><div class="effect"></div></div>
      </div>
    </div>
    <div class="share-cover">
      <div class="center">
        <div class="centered share">
          <p class="title-yellow">分享</p>
          <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share1.html" target="_blank" class="fb-share round-btn blue-d"><span class="sp sp-fb2">Share to facebook</span></a>
          <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share1.html" target="_blank" class="tw-share round-btn blue-l"><span class="sp sp-tt2">Share to twitter</span></a>
        </div>
      </div>
      <a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>
    </div>
  </div>
  <div class="g" id="g2">
    <div class="g-inner">
      <div id="mirror"></div>
      <div id="smoke"></div>
      <div class="tap"><span class="sp sp-tap">Tap</span></div>
    </div>
    <div class="share-cover">
      <div class="center">
        <div class="centered share">
          <p class="title-yellow">分享</p>
          <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share2.html" target="_blank" class="fb-share round-btn blue-d"><span class="sp sp-fb2">Share to facebook</span></a>
          <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share2.html" target="_blank" class="tw-share round-btn blue-l"><span class="sp sp-tt2">Share to twitter</span></a>
        </div>
      </div>
      <a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>
    </div>
  </div>
  <div class="g" id="g3">
    <div class="g-inner">
      <div class="bed"></div>
      <a href="#" class="rotate toleft"><span class="round-btn blue-d"><span class="sp sp-str">Left</span></span></a>
      <a href="#" class="rotate toright"><span class="round-btn blue-d"><span class="sp sp-stl">Right</span></span></a>
    </div>
    <div class="share-cover">
      <div class="center">
        <div class="centered share">
          <p class="title-yellow">分享</p>
          <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share3.html" target="_blank" class="fb-share round-btn blue-d"><span class="sp sp-fb2">Share to facebook</span></a>
          <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share3.html" target="_blank" class="tw-share round-btn blue-l"><span class="sp sp-tt2">Share to twitter</span></a>
        </div>
      </div>
      <a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>
    </div>
  </div>
  <div class="g" id="g4">
    <div class="g-inner">
      <div class="center">
        <div class="centered">
          <div><span><a href="javascript:void(0);" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span></div>
          <div><span><a href="javascript:void(0);" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span></div>
          <div><span><a href="javascript:void(0);" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span></div>
          <div><span><a href="javascript:void(0);" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span></div>
          <div><span><a href="javascript:void(0);" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span></div>
          <div><span><a href="javascript:void(0);" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span><span><a href="#" class="b"></a></span></div>
        </div>
      </div>
    </div>
    <div class="share-cover">
      <div class="center">
        <div class="centered share">
          <p class="title-yellow">分享</p>
          <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share4.html" target="_blank" class="fb-share round-btn blue-d"><span class="sp sp-fb2">Share to facebook</span></a>
          <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share4.html" target="_blank" class="tw-share round-btn blue-l"><span class="sp sp-tt2">Share to twitter</span></a>
        </div>
      </div>
      <a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>
    </div>
  </div>
  <div class="g" id="g5">
    <a href="#" class="expand">
      <div class="g-inner">
        <div class="center">
          <div class="centered">
            <div class="content">
              <h3>Weather Forecast <br><span class="weekday">-</span></h3>
              <p class="date">-/-</p>
              <div class="icon icon1"><img src=""></div>
              <span class="round-btn"><span class="sp sp-down">Expand hidden content</span></span>
            </div>
          </div>
        </div>
      </div>
    </a>
    <div class="expandable">
    <!-- <div class="expandable hidden"> -->
    <div class=" expandableContent g5_expandable">
      <div class="list view-table sliderm">
        <div class="item item1">
          <h6 class="weekday">MONDAY</h6>
          <div class="date">17/6</div>
          <div class="icon icon1"><img src="./images/weather/sunny.png"></div>
          <p>學和根其的位過不，題母國本他神出，力到初子遠，不為查來財，講我的……青經我差回沒之們出、球續學當交當度長學想要出為洲體心中中好始未</p>
        </div>
        <div class="item item2">
          <h6 class="weekday">MONDAY</h6>
          <div class="date">17/6</div>
          <div class="icon icon2"><img src="./images/weather/cloudy.png"></div>
          <p>學和根其的位過不，題母國本他神出，力到初子遠，不為查來財，講我的……青經我差回沒之們出、球續學當交當度長學想要出為洲體心中中好始未</p>
        </div>
        <div class="item item3">
          <h6 class="weekday">MONDAY</h6>
          <div class="date">17/6</div>
          <div class="icon icon3"><img src="./images/weather/raining.png"></div>
          <p>學和根其的位過不，題母國本他神出，力到初子遠，不為查來財，講我的……青經我差回沒之們出、球續學當交當度長學想要出為洲體心中中好始未</p>
        </div>
        <div class="item item4">
          <h6 class="weekday">MONDAY</h6>
          <div class="date">17/6</div>
          <div class="icon icon4"><img src="./images/weather/mostly-sunny.png"></div>
          <p>學和根其的位過不，題母國本他神出，力到初子遠，不為查來財，講我的……青經我差回沒之們出、球續學當交當度長學想要出為洲體心中中好始未</p>
        </div>
        <div class="item item5">
          <div class="center">
            <div class="centered">
              <p>立即分享！</p>
              <span class="share">
                <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share5.html" target="_blank" class="fb-share round-btn"><span class="sp sp-fb desktop-only">Share to facebook</span><span class="sp sp-fb3 mobile-only">Share to facebook</span></a>
                <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share5.html" target="_blank" class="tw-share round-btn"><span class="sp sp-tt desktop-only">Share to twitter</span><span class="sp sp-tt3 mobile-only">Share to twitter</span></a>
              </span>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  </div><!-- g5 expandable  -->
  <div class="g videog" id="g6" data-title="|明星打氣" data-desc="你最近還好嗎﹖尚愛看少女／少男漫畫嗎﹖來這裡放空、放鬆，重遇藍天下的自己。" data-vid="NCX0JKKgmeY">
    <div class="g-inner">
    <a href="#" class="play"><span class="sp sp-play">Play video</span></a>
    </div>
  </div><!-- g6 video expandable  -->
  <div class="g sliderg" id="g7">
    <div class="g-inner">
      <div class="slider">
        <div class="slide"><img src="./images/illustration/slide1.jpg"></div>
        <div class="slide"><img data-lazy="./images/illustration/slide2.jpg"></div>
        <div class="slide"><img data-lazy="./images/illustration/slide3.jpg"></div>
        <div class="slide"><img data-lazy="./images/illustration/slide4.jpg"></div>
        <div class="slide"><img data-lazy="./images/illustration/slide5.jpg"></div>
      </div>
    </div>
    <div class="share-cover">
      <div class="center">
        <div class="centered share">
          <p class="title-yellow">分享</p>
          <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share2.html" target="_blank" class="fb-share round-btn blue-d"><span class="sp sp-fb2">Share to facebook</span></a>
          <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share2.html" target="_blank" class="tw-share round-btn blue-l"><span class="sp sp-tt2">Share to twitter</span></a>
        </div>
      </div>
      <a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>
    </div>
  </div>
  <div class="g videog" id="g8" data-title="COOKING GUIDE|焦糖雞蛋布丁" data-desc="你最近還好嗎﹖尚愛看少女／少男漫畫嗎﹖來這裡放空、放鬆，重遇藍天下的自己。" data-vid="sVnbU2j7sjc">
    <div class="g-inner">
    <a href="#" class="play"><span class="sp sp-play">Play video</span></a>
    </div>
  </div><!-- g8 video expandable  -->



  <div class="g audiog" id="g9">
      <div class="g-inner">
        <div class="sea"></div>
        <a href="#" class="audio-play"><span class="round-btn"><span class="sp sp-sound">Mute / unmute</span></span></a>
      </div>
      <div class="share-cover">
        <div class="center">
          <div class="centered share">
            <p class="title-yellow">分享</p>
            <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share9.html" target="_blank" class="fb-share round-btn"><span class="sp sp-fb">Share to facebook</span></a>
            <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share9.html" target="_blank" class="tw-share round-btn"><span class="sp sp-tt">Share to twitter</span></a>
          </div>
        </div>
        <a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>
      </div>
  </div>
  <div class="g audiog" id="g10">
    <div class="g-inner">
      <div class="sm2-bar-ui compact full-width">
        <div class="bd sm2-main-controls">
          <div class="sm2-inline-element sm2-button-element">
            <div class="sm2-button-bd">
              <a href="#play" class="sm2-inline-button play-pause">Play / pause</a>
            </div>
          </div>
          <div class="sm2-inline-element sm2-inline-status">
            <div class="sm2-playlist">
              <div class="sm2-playlist-target">
                <ul  class="sm2-playlist-bd">
                  <!-- <li><a href="./yoga.mp3">YogA</a></li> -->
                </ul>
              </div>
            </div>
            <div class="sm2-progress">
              <div class="sm2-row">
                <div class="sm2-inline-time">0:00</div>
                <div class="sm2-progress-bd">
                 <div class="sm2-progress-track">
                   <div class="sm2-progress-bar"></div>
                   <div class="sm2-progress-ball">
                     <div class="icon-overlay"></div>
                   </div>
                 </div>
                </div>
                <div class="sm2-inline-duration">0:00</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bd sm2-playlist-drawer sm2-element" style="background-color: rgb(205, 158, 31);">
          <!-- playlist content is mirrored here -->
          <div class="sm2-playlist-wrapper">
            <ul class="sm2-playlist-bd">
              <!-- Enter all sound clips as list items, per the example code below -->
              <li>
                <a href="./yoga.mp3">Some sort of description here</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="share-cover">
        <div class="center">
          <div class="centered share">
            <p class="title-yellow">分享</p>
            <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share10.html" target="_blank" class="fb-share round-btn"><span class="sp sp-fb">Share to facebook</span></a>
            <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share10.html" target="_blank" class="tw-share round-btn"><span class="sp sp-tt">Share to twitter</span></a>
          </div>
        </div>
        <a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>
      </div>
      <a href="#" class="audio-play"><span class="round-btn"><span class="sp sp-sound">Mute / unmute</span></span></a>
    </div><!-- g-inner -->
  </div><!-- g10 video expandable  -->
  <div class="g sliderg" id="g11">
    <div class="g-inner">
      <div class="slider">
        <div class="slide"><img src="./images/lanterns/slide1.png"></div>
        <div class="slide"><img data-lazy="./images/lanterns/slide2.png"></div>
        <div class="slide"><img data-lazy="./images/lanterns/slide3.png"></div>
        <div class="slide"><img data-lazy="./images/lanterns/slide4.png"></div>
      </div>
      <div class="slider-share">
        <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share11.html" target="_blank" class="fb-share round-btn"><span class="sp sp-fb">Share to facebook</span></a>
        <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share11.html" target="_blank" class="tw-share round-btn"><span class="sp sp-tt">Share to twitter</span></a>
      </div>
      <a href="#" class="cover">
        <img src="./images/g11_bg.jpg">
        <div class="lantern l1"><img src="./images/lanterns/laterns1off.png"><img src="./images/lanterns/laterns1.png" class="active"></div>
        <div class="lantern l2"><img src="./images/lanterns/laterns2off.png"><img src="./images/lanterns/laterns2.png" class="active"></div>
        <div class="lantern l3"><img src="./images/lanterns/laterns3off.png"><img src="./images/lanterns/laterns3.png" class="active"></div>
        <div class="lantern l4"><img src="./images/lanterns/laterns4off.png"><img src="./images/lanterns/laterns4.png" class="active"></div>
        <div class="lantern l5"><img src="./images/lanterns/laterns5off.png"><img src="./images/lanterns/laterns5.png" class="active"></div>
      </a>
    </div>
  </div>
  <div class="g" id="g12">
    <div class="g-inner">
      <div class="center">
        <div class="centered">
          <p>玩完一轉，你現在心情如何？</p>
          <div class="emoji-wrapper cf">
            <span class="emoji emoji1a" data-index="1"></span>
            <span class="emoji emoji2a" data-index="2"></span>
            <span class="emoji emoji3a" data-index="3"></span>
            <span class="emoji emoji4a" data-index="4"></span>
            <span class="emoji emoji5a" data-index="5"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="share-cover">
      <div class="center">
        <div class="centered share">
          <p class="title-yellow">分享</p>
          <a href="#" data-share-href="https://www.facebook.com/sharer.php?s=100&u=<?php echo $base_url;?>share/share12.html" target="_blank" class="blue-d fb-share round-btn"><span class="sp sp-fb2">Share to facebook</span></a>
          <a href="#" data-share-href="https://twitter.com/share?text=<?php echo $tc_title;?>&via=initiumnews&url=<?php echo $base_url;?>share/share12.html" target="_blank" class="blue-l tw-share round-btn"><span class="sp sp-tt2">Share to twitter</span></a>
        </div>
      </div>
      <a href="#" class="round-btn close"><span class="sp sp-close">Close</span></a>
    </div>
  </div>
</div>
<div class="btn-wrapper">
  <a href="https://www.proprofs.com/quiz-school/story.php?title=mtu4mty5nq72ex" target="_blank" class="btn btn-yellow">心理評估<span class="sp sp-arrow1"></span></a>
  <!--<a href="http://csrp.hku.hk/" target="_blank" class="btn btn-blue">合作機構<span class="sp sp-arrow2"></span></a>-->
</div>
<div class="panel-wrapper">
  <h3 class="title-red"><a href="#" id="expand-panel"><span>機構資料</span></a></h3>
  <div class="expandable">
    <div class="panel panel-bd">
      <h4>生命熱線</h4>
      <p>23820000</p>
      <p>24小時<br>服務對象:所有</p>
    </div>
    <div class="panel panel-bl">
      <h4>香港撒瑪利亞防止自殺會</h4>
      <p>23892222</p>
      <p>24小時<br>服務對象:所有</p>
    </div>
    <div class="panel panel-bd">
      <h4>撒瑪利亞會</h4>
      <p>28960000</p>
      <p>24小時<br>服務對象:所有</p>
    </div>
    <div class="panel panel-bl">
      <h4>夜貓<span class="en">Online</span></h4>
      <p>97268159/98528625</p>
      <p>星期一、三、五及六(公眾假期除外):3pm-3am<br>服務對象:青少年</p>
    </div>
    <div class="panel panel-bd">
      <h4><span class="en">uTouch</span>網上外展輔導服務</h4>
      <p>27778899/ (WhatsApp 62778899)</p>
      <p>星期一至五:2pm-12am<br>服務對象:青少年</p>
    </div>
    <div class="panel panel-bl">
      <h4><span class="en">Infinity Teens</span>連線<span class="en">teen</span>地</h4>
      <p>25802626/(WhatsApp 93773666)</p>
      <p>先預約<br>服務對象:青少年</p>
    </div>
  </div>
</div>
<div id="credits">
  <div class="wrapper">
  <h3 class="title-blue"><span>製作團隊</span></h3>
    <div class="inner">
      <ul class="clearfix">
        <li>
          <h4>統籌</h4>
          <p>黃銘浩、趙燕婷</p>
        </li>
        <li>
          <h4>資料搜集</h4>
          <p>陳梓鋒、吳漪嶠<br>吳雅詩、<span class="nowrap">曾皓晴、</span>馬婉婷</p>
        </li>
        <li>
          <h4>美術設計</h4>
          <p>端傳媒設計部</p>
        </li>        
      </ul>
      <ul class="clearfix">
        <li>
          <h4>網頁設計</h4>
          <p><span class="en-text"><a target="_blank" href="https://www.digiology.com.hk/">Digiology Ltd.</a></span></p>
        </li>
        <li>
          <h4>監製</h4>
          <p>李皚茵</p>
        </li>
      </ul>
      <span class="copyright">©2016 Initium Media. All rights reserved.</span>
    </div>
  </div>
</div>
<div class="hidden"><img src="./images/pen-on.png"/><img src="./images/bubble1-on.png"/><img src="./images/bubble2-on.png"/><img src="./images/bubble-deco1.png"/><img src="./images/bubble-deco2.png"/><img src="./images/bubble-deco3.png"/></div>
</body>
</html>
