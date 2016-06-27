<?php include '../config.php';
//$tc_title = '';?>
<meta name="description" content="<?php echo $tc_desc;?>">
<meta property="og:title" content="<?php echo $tc_title;?> | 端傳媒 Initium Media">
<meta property="og:type" content="article">
<meta property="og:image" content="<?php echo $base_url;?>images/share/share11.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="<?php echo $base_url;?>share/share11.html">
<meta name="twitter:title" content="<?php echo $tc_title;?> | 端傳媒 Initium Media">
<meta name="twitter:description" content="<?php echo $tc_desc;?>">
<meta name="twitter:domain" content="theinitium.com">
<meta name="twitter:site" content="@initiumnews">
<meta name="twitter:creator" content="@initiumnews">
<meta name="twitter:image:src" content="<?php echo $base_url;?>images/share/share11.jpg">
<title><?php echo $tc_title;?> | 端傳媒 Initium Media</title>
<script type="text/javascript">
  var shop_name = window.location.pathname.split('/').pop();
  shop_name = shop_name.substr(0, shop_name.length-5)
  if(shop_name != 'index' && shop_name != '') window.location.href = "../index.html?utm_source=share_button&utm_medium=deeplink&utm_term="+shop_name+"&utm_campaign=site_share#"+shop_name;

</script>
