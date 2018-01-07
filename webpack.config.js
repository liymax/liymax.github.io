const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
//const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const path = require('path');

const ENV=process.env.NODE_ENV;

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
};

const devConfig=Object.assign({
	entry: {
		vendor:["react","react-dom","mobx"],
		index:"./src/reactdoc/index.js"
	},
	output: {
		filename: 'dist/[name].js?[hash]',
		path: path.resolve(__dirname),
		publicPath: "/"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: (module)=> {
				return module.context && module.context.indexOf("node_modules") !== -1;
			}
		}),

		new htmlWebpackPlugin({
			title: "github page",
			template: "./template/index.html",
			filename: "dist/index.html",
			inject: "body",
			chunks: ["vendor","index"]
		}),
		new webpack.SourceMapDevToolPlugin({
			exclude: ['dist/vendor.js'],
			filename: 'dist/[name].js.map'
		})
	],
},baseConfig);


const prodConfig=Object.assign({
	entry: {
		vendor:["react","react-dom","mobx"],
		index:"./src/reactdoc/index.js"
	},
	output: {
		filename: 'public/[name].js?[hash]',
		path: path.resolve(__dirname),
		publicPath: "/"
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true,
				warnings: false,
				drop_debugger: true,
				drop_console:true,
				//pure_funcs: ['console.log']
			},
			beautify: false,
			comments: false
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: (module)=> {
				return module.context && module.context.indexOf("node_modules") !== -1;
			}
		}),
		new htmlWebpackPlugin({
			title: "github page",
			template: "./template/index.html",
			filename: "index.html",
			inject: "body",
			chunks: ["vendor","index"]
		})
	],
},baseConfig);


if(ENV==="production"){
	module.exports=prodConfig;
}else {
	module.exports=devConfig;
}


/*module.exports = [
	devConfig,
	//prodConfig,
];*/
