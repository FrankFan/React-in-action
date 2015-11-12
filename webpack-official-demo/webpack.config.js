// 使用CLI
// webpack ./entry.js bundle.js --module-bind 'css=style!css'
// webpack --progress --colors --watch
// webpack --display-error-details  查看报错详情

// $ npm run build
// visit: http://localhost:8080/webpack-dev-server/bundle
// autoreload

// 使用配置文件
module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	}
}