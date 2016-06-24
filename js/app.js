require.config({
  paths: {
      "jquery": "jquery.min",
      "xdomain": "//cdnjs.cloudflare.com/ajax/libs/xdomain/0.7.3/xdomain",
  },
  "shim": {
    "jquery.scrollTo.min": ["jquery"],
    "slick.min": ["jquery"],
  },
  waitSeconds: 40
});

requirejs(["main"]);


// for PROD
// requirejs(["../dist/js/main.min"]);
