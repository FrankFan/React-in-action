// from http://segmentfault.com/a/1190000002767365

var weback = require('webpack');

module.exports = {
	entry: {
		entry1: './entry/entry1.js',
		entry2: './entry/entry2.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].entry.js'
	},
	resolve: {
		extentsions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: '/\.js$/',
				loader: 'babel-loader'
			},
			{
				test: '/\.jsx/',
				loader: 'babel-loader!jsx-loader?harmony'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
			}
		]
	}
}