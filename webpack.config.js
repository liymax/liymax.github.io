const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');

//const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

let base = {
	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/
	},

	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"],
		alias: {
			src: path.resolve(__dirname, "src"),
		}
	},

	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
		]
	},
	entry: {
			index:"./src/index.js"
	},
	output: {
		filename: 'dist/[name]_[hash].js?',
		path: path.resolve(__dirname),
		publicPath: "/"
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "github page",
			template: "./template/index.html",
			filename: "index.html",
			inject: "body",
			chunks: ["index"]
		})
	],
};

module.exports = base;
