
module.exports = {

	webpack: (config, { buildId, dev }) => {

		console.log(buildId);
		console.dir(dev);
		config.output.publicPath='/next/'+buildId+'/webpack/';
		console.dir(config);
		return config
	},

	assetPrefix: process.env.NODE_ENV === 'production'?"/public/":"",

	exportPathMap: function() {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/readme': { page: '/readme' },
		}
	}
};