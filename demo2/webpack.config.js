/* webpack config file */
// 失败了，总是报错“ Cannot resolve 'file' or 'directory' ./Hello”
// 不知道哪里配置的不对


module.exports = {
	entry: './index.jsx',
	output: {
		path: './dist',
		filename: 'bundle.js', // 默认为 bundle.js
		publicPath: 'http://localhost:8090/assets'
	},
	module: {
		loaders: [
			{
				// tell webpack to use jsx-loader for all *.jsx files
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
				// loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			}
		]
	},
	externals: {
		// don't bundle the 'react' npm package with our bundle.js
		// but get it from a global 'React' variable
		'react': 'React'
	},
	resolve: {
		extentsions: ['', '.js', '.jsx']
	}
}