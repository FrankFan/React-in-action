var path = require('path');
var webpack = require('webpack');
// var React = require('react');


module.exports = {
    // devtool: 'eval',
    entry: [
        // 'webpack-dev-server/client?http://localhost:3000', 
        // 'webpack/hot/only-dev-server', 
        './src/main.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
                // inclue: path.join(__dirname, 'src'),
                query: {
                  presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    // externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        // 'react': 'React'
    // }
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // }
    // resolveLoader: {
    //     root: [
    //         path.join(__dirname, "node_modules")
    //     ]
    // }
}