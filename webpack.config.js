const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const path = require('path');

//const ENV=process.env.NODE_ENV;

let baseConfig = {
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
			{test: /\.(js|jsx)$/, use: 'babel-loader',include: path.resolve(__dirname, "src"), exclude: /node_modules/},
		]
	},
	entry: {
		vendor:["react","react-dom"],
		index:"./src/site/entry.js"
	},
	output: {
		filename: '[name].js?[hash:8]',
		path: path.resolve(__dirname,'dist/site'),
		publicPath: "/site"
	},
};

const devConfig=Object.assign({
	mode: 'development',
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new htmlWebpackPlugin({
			title: "github page",
			template: "./template/index.html",
			filename: "index.html",
			inject: "body",
			chunks: ["vendor","index"]
		}),

		new webpack.SourceMapDevToolPlugin({
			exclude: ['vendor.js'],
			filename: '[name].js.map'
		})
	],
},baseConfig);

const prodConfig=Object.assign({
	mode: 'production',
	plugins: [
		new htmlWebpackPlugin({
			title: "github page",
			template: "./template/index.html",
			filename: "index.html",
			inject: "body",
			chunks: ["vendor","index"]
		})
	],
},baseConfig);

module.exports=devConfig;

/*if(ENV==="production"){
	module.exports=prodConfig;
}else {
	module.exports=devConfig;
}*/

