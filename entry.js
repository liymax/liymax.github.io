require("babel-register")({
  presets: [
    [
      "env",
      {
        targets: {
          node: true
        }
      }
    ],
    "stage-0"
  ],
  plugins: [
    [
      "transform-runtime",
      {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: "babel-runtime"
      }
    ]
  ]
});
require("./server");
