// from http://segmentfault.com/a/1190000002767365

var weback = require('webpack');

// module.exports = {
// 	entry: {
// 		entry1: './entry/entry1.js',
// 		entry2: './entry/entry2.js'
// 	},
// 	output: {
// 		path: __dirname + '/dist',
// 		filename: '[name].entry.js'
// 	},
// 	resolve: {
// 		extentsions: ['', '.js', '.jsx']
// 	},
// 	module: {
// 		loaders: [
// 			{
// 				test: '/\.js$/',
// 				loader: 'babel-loader'
// 			},
// 			{
// 				test: '/\.jsx/',
// 				loader: 'babel-loader!jsx-loader?harmony'
// 			},
// 			{
// 				test: /\.less$/,
// 				loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
// 			}
// 		]
// 	}
// }



module.exports = {
	entry: {
		helloworld: [
		    'webpack-dev-server/client?http://localhost:3000',
		    'webpack/hot/only-dev-server',
		    './ES6/Hello1'
	  ]
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
				test: /\.js?$/,
				loaders: ['react-hot', 'babel'],
				include: [path.join(__dirname, 'ES6')]
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
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}