const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const base = {
	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.join(__dirname, './src')
		]
	},

	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/}
		]
	},
	watch:true,
	watchOptions: {
		aggregateTimeout:400,
		poll:1000,
		ignored: /node_modules/
	},
	stats:{ colors:true },
	devtool: 'cheap-module-eval-source-map'
};

module.exports=Object.assign({
	mode:"development",
	entry:{
		vendor: ['react', 'react-dom'],
		game:"./src/index.js"
	},
	output:{
		filename:"[name].js?v=[hash:8]",
		path:path.resolve(__dirname,"dist"),
		publicPath: "./"
	},

	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			title: "todo example",
			template: "./template/index.html",
			filename: "index.html",
			inject: "body",
			chunks: ["vendor","game"]
		}),
		new OpenBrowserPlugin({ url: 'http://localhost:9001' })
	]
},base);

