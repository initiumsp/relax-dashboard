require.config({
  paths: {
      "jquery": "jquery.min",
      "xdomain": "//cdnjs.cloudflare.com/ajax/libs/xdomain/0.7.3/xdomain",
      "tweenmax": "//cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min",
  },
  "shim": {
    "jquery.scrollTo.min": ["jquery"],
    "slick.min": ["jquery"],
    "bar-ui": ["soundmanager.min"],
  },
  waitSeconds: 40
});

requirejs(["main"]);


// for PROD
// requirejs(["../dist/js/main.min"]);
