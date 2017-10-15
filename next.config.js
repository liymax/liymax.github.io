
module.exports = {
	assetPrefix: process.env.NODE_ENV === 'production'?"/public/":"",

	exportPathMap: function() {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/readme': { page: '/readme' },
		}
	}
};