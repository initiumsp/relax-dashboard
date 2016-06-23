require.config({
  paths: {
      "jquery": "jquery.min",
  },
  "shim": {
    "jquery.scrollTo.min": ["jquery"],
  },
  waitSeconds: 40
});

requirejs(["main"]);


// for PROD
// requirejs(["../dist/js/main.min"]);
