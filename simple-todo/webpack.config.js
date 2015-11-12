module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: "babel",
			query: {
				presets: ['react']
			}
		}]
	},
	externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}