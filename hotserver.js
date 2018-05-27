const webpack = require("webpack");
const path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const proxy = require("http-proxy-middleware");
const config = require("./webpack.config");
const host = "localhost",
  port = 3600;
new WebpackDevServer(webpack(config), {
  hot: true,
  compress: true,
  historyApiFallback: true,
  contentBase: path.join(__dirname, "public"),
  publicPath: "/",

  watchOptions: {
    aggregateTimeout: 400,
    poll: 1000,
    ignored: /node_modules/
  },
  stats: {
    colors: true
  },
  before(app) {
    app.use("/km/api", proxy({ target: "http://www.api.com", changeOrign: true }));
  }
}).listen(port, host, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening at: http://${host}:${port}`);
  }
});
