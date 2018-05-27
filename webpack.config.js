const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OpenBrowser = require("open-browser-webpack-plugin");
const path = require("path");
const hotEntry = [
  "react-hot-loader/patch",
  "webpack-dev-server/client?/",
  "webpack/hot/only-dev-server"
];
const polyfill = [
  "core-js/es6/map",
  "core-js/es6/set",
  "core-js/es6/array",
  "core-js/es6/string",
  "core-js/es6/promise"
];
let baseConfig = {
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      src: path.resolve(__dirname, "src")
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      }
    ]
  },
  entry: {
    vendor: [...polyfill, "react", "react-dom"],
    app: [...hotEntry, "./src/entry.js"]
  },
  output: {
    filename: "[name].js?v=[hash:8]",
    chunkFilename: "[name].js?v=[hash:8]",
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "./"
  }
};

const devConfig = Object.assign(
  {
    mode: "development",
    plugins: [
      new CleanWebpackPlugin(["dist"]),
      new webpack.HotModuleReplacementPlugin(),
      new htmlWebpackPlugin({
        title: "github page",
        template: "./template/index.html",
        filename: "index.html",
        inject: "body",
        chunks: ["vendor", "app"]
      }),
      new OpenBrowser({ browser: "chrome", url: "http://localhost:3600", ignoreErrors: true })
    ]
  },
  baseConfig
);

/*const prodConfig = Object.assign(
  {
    mode: "production",
    plugins: [
      new htmlWebpackPlugin({
        title: "github page",
        template: "./template/index.html",
        filename: "index.html",
        inject: "body",
        chunks: ["vendor", "index"]
      })
    ]
  },
  baseConfig
);*/

module.exports = devConfig;
