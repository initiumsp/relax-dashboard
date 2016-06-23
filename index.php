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

    // ga('create', 'UA-65642613-1', 'auto');
    // ga('send', 'pageview');

  </script>
  <link href="./css/all.css" rel="stylesheet" media="screen">
</head>
<body class="tc">
  <h1>12格遇上天藍</h1>
  <div id="game_wrapper">
    <div class="g" id="g1"></div>
    <div class="g" id="g2"></div>
    <div class="g" id="g3"></div>
    <div class="g" id="g4"></div>
    <div class="g" id="g5"></div><!-- g5 expandable  -->
    <div class="g videog" id="g6"></div><!-- g6 video expandable  -->
    <div class="g" id="g7"></div>
    <div class="g videog" id="g8"></div><!-- g8 video expandable  -->
    <div class="g" id="g9"></div>
    <div class="g videog" id="g10"></div><!-- g10 video expandable  -->
    <div class="g" id="g11"></div>
    <div class="g" id="g12"></div>
  </div>
</body>
</html>